class BTCPriceMonitor {
    constructor() {
        this.chart = null;
        this.ws = null;
        this.lastPrice = 0;
        this.priceData = [];
        this.timeLabels = [];
        this.maxDataPoints = 50;
        this.reconnectAttempts = 0;
        this.maxReconnectAttempts = 5;
        
        this.initChart();
        this.connectWebSocket();
        this.setupEventListeners();
    }

    initChart() {
        const ctx = document.getElementById('priceChart').getContext('2d');
        
        this.chart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: [],
                datasets: [{
                    label: 'BTC价格 (USD)',
                    data: [],
                    borderColor: '#FFD700',
                    backgroundColor: 'rgba(255, 215, 0, 0.1)',
                    borderWidth: 2,
                    fill: true,
                    tension: 0.4,
                    pointRadius: 0,
                    pointHoverRadius: 5
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        labels: {
                            color: 'white'
                        }
                    }
                },
                scales: {
                    x: {
                        display: true,
                        grid: {
                            color: 'rgba(255, 255, 255, 0.1)'
                        },
                        ticks: {
                            color: 'white',
                            maxTicksLimit: 10
                        }
                    },
                    y: {
                        display: true,
                        grid: {
                            color: 'rgba(255, 255, 255, 0.1)'
                        },
                        ticks: {
                            color: 'white',
                            callback: function(value) {
                                return '$' + value.toLocaleString();
                            }
                        }
                    }
                },
                animation: {
                    duration: 200,
                    easing: 'easeInOutQuart'
                },
                interaction: {
                    intersect: false,
                    mode: 'index'
                }
            }
        });
    }

    connectWebSocket() {
        try {
            // 使用币安WebSocket API获取实时BTC价格
            this.ws = new WebSocket('wss://stream.binance.com:9443/ws/btcusdt@ticker');
            
            this.ws.onopen = () => {
                console.log('币安WebSocket连接已建立');
                this.updateConnectionStatus(true);
                this.reconnectAttempts = 0;
            };
            
            this.ws.onmessage = (event) => {
                try {
                    const data = JSON.parse(event.data);
                    this.handlePriceUpdate(data);
                } catch (error) {
                    console.error('解析数据错误:', error);
                }
            };
            
            this.ws.onclose = () => {
                console.log('币安WebSocket连接已关闭');
                this.updateConnectionStatus(false);
                this.attemptReconnect();
            };
            
            this.ws.onerror = (error) => {
                console.error('币安WebSocket错误:', error);
                this.updateConnectionStatus(false);
            };
            
        } catch (error) {
            console.error('连接币安WebSocket失败:', error);
            this.updateConnectionStatus(false);
        }
    }

    handlePriceUpdate(data) {
        try {
            // 币安数据格式适配
            const currentPrice = parseFloat(data.c); // 当前价格
            const priceChange = parseFloat(data.P); // 24小时价格变化百分比
            const highPrice = parseFloat(data.h); // 24小时最高价
            const lowPrice = parseFloat(data.l); // 24小时最低价
            const volume = parseFloat(data.v); // 24小时成交量
            
            // 更新价格显示
            this.updatePriceDisplay(currentPrice, priceChange, highPrice, lowPrice, volume);
            
            // 更新图表
            this.updateChart(currentPrice);
            
            this.lastPrice = currentPrice;
            
        } catch (error) {
            console.error('处理币安价格数据错误:', error);
        }
    }

    updatePriceDisplay(currentPrice, priceChange, highPrice, lowPrice, volume) {
        const currentPriceEl = document.getElementById('currentPrice');
        const priceChangeEl = document.getElementById('priceChange');
        const highPriceEl = document.getElementById('highPrice');
        const lowPriceEl = document.getElementById('lowPrice');
        const volumeEl = document.getElementById('volume');
        
        // 更新当前价格
        currentPriceEl.textContent = '$' + currentPrice.toLocaleString('en-US', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        });
        
        // 更新价格变化
        const changeText = (priceChange >= 0 ? '+' : '') + priceChange.toFixed(2) + '%';
        priceChangeEl.textContent = changeText;
        priceChangeEl.className = 'price-change ' + (priceChange >= 0 ? 'positive' : 'negative');
        
        // 更新24小时最高价
        highPriceEl.textContent = '$' + highPrice.toLocaleString('en-US', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        });
        
        // 更新24小时最低价
        lowPriceEl.textContent = '$' + lowPrice.toLocaleString('en-US', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        });
        
        // 更新24小时成交量
        volumeEl.textContent = volume.toLocaleString('en-US', {
            minimumFractionDigits: 0,
            maximumFractionDigits: 0
        }) + ' BTC';
        
        // 添加价格变化动画效果
        if (this.lastPrice !== 0) {
            if (currentPrice > this.lastPrice) {
                currentPriceEl.style.color = '#4CAF50';
            } else if (currentPrice < this.lastPrice) {
                currentPriceEl.style.color = '#f44336';
            }
            
            setTimeout(() => {
                currentPriceEl.style.color = 'white';
            }, 1000);
        }
    }

    updateChart(price) {
        const now = new Date();
        const timeLabel = now.toLocaleTimeString('zh-CN', {
            hour12: false,
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        });
        
        // 添加新数据点
        this.chart.data.labels.push(timeLabel);
        this.chart.data.datasets[0].data.push(price);
        
        // 限制数据点数量
        if (this.chart.data.labels.length > this.maxDataPoints) {
            this.chart.data.labels.shift();
            this.chart.data.datasets[0].data.shift();
        }
        
        // 更新图表
        this.chart.update({
            duration: 150,
            easing: 'easeOutQuart'
        });
    }

    updateConnectionStatus(connected) {
        const statusEl = document.getElementById('connectionStatus');
        if (connected) {
            statusEl.innerHTML = '<span class="connected">● 已连接 - 实时更新中</span>';
        } else {
            statusEl.innerHTML = '<span class="disconnected">● 连接断开 - 尝试重连中...</span>';
        }
    }

    attemptReconnect() {
        if (this.reconnectAttempts < this.maxReconnectAttempts) {
            this.reconnectAttempts++;
            console.log(`尝试重连 (${this.reconnectAttempts}/${this.maxReconnectAttempts})...`);
            
            setTimeout(() => {
                this.connectWebSocket();
            }, 3000 * this.reconnectAttempts); // 递增延迟
        } else {
            console.error('达到最大重连次数，停止重连');
            document.getElementById('connectionStatus').innerHTML = 
                '<span class="disconnected">● 连接失败 - 请刷新页面重试</span>';
        }
    }

    setupEventListeners() {
        // 页面可见性变化时处理连接
        document.addEventListener('visibilitychange', () => {
            if (document.hidden) {
                // 页面隐藏时可以选择暂停连接
            } else {
                // 页面重新可见时确保连接正常
                if (this.ws && this.ws.readyState !== WebSocket.OPEN) {
                    this.connectWebSocket();
                }
            }
        });
        
        // 窗口关闭时清理连接
        window.addEventListener('beforeunload', () => {
            if (this.ws) {
                this.ws.close();
            }
        });
    }

    // 手动重连方法
    reconnect() {
        if (this.ws) {
            this.ws.close();
        }
        this.reconnectAttempts = 0;
        this.connectWebSocket();
    }
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', () => {
    window.btcMonitor = new BTCPriceMonitor();
    
    // 添加手动重连按钮功能（可选）
    const statusEl = document.getElementById('connectionStatus');
    statusEl.addEventListener('click', () => {
        if (window.btcMonitor) {
            window.btcMonitor.reconnect();
        }
    });
    statusEl.style.cursor = 'pointer';
    statusEl.title = '点击重新连接';
});