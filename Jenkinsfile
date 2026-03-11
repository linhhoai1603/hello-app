pipeline {
    agent any

    stages {
        stage('Dọn dẹp Container cũ') {
            steps {
                // Xóa container cũ nếu đang chạy để tránh trùng tên và cổng
                sh 'docker rm -f my-web-server || true'
            }
        }

        stage('Build Docker Image') {
            steps {
                // Jenkins tự clone code từ GitHub về nên ta build tại chỗ (.)
                sh 'docker build -t hello-node-app .'
            }
        }

        stage('Deploy lên Server') {
            steps {
                // Chạy container mới ở cổng 80
                sh 'docker run -d --name my-web-server -p 80:3000 hello-node-app'
                echo '--------------------------------------------------'
                echo 'Ứng dụng đã lên sóng tại IP máy ảo của bạn!'
                echo '--------------------------------------------------'
            }
        }
    }

    post {
        always {
            // Dọn dẹp các Image thừa để không bị đầy ổ cứng 1GB
            sh 'docker image prune -f'
        }
        success {
            echo 'Chúc mừng! Pipeline đã hoàn thành xuất sắc.'
        }
        failure {
            echo 'Ối! Có lỗi xảy ra rồi, kiểm tra Console Output nhé.'
        }
    }
}
