import React from 'react';

function HeroLogo() {
  const svgContent = `
  <svg width="212" height="212" viewBox="0 0 212 212" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M47.7201 62.9332L38.2935 44.0799C37.7335 43.0532 35.1202 44.0799 35.7735 45.2932L45.2935 64.0532C45.8535 65.1732 48.3735 64.1464 47.7201 62.9332ZM174.933 95.133L196.4 79.2664C196.866 78.8931 196.68 78.4264 196.119 78.3331C195.793 78.2673 195.456 78.275 195.133 78.3558C194.81 78.4365 194.509 78.5882 194.252 78.7998L172.786 94.7597C172.32 95.133 172.506 95.5063 173.066 95.693C173.735 95.7358 174.398 95.5371 174.933 95.133ZM183.613 127.146C186.319 124.72 190.24 120.986 194.067 123.506C194.337 123.661 194.642 123.743 194.954 123.743C195.265 123.743 195.571 123.661 195.84 123.506C196.027 123.413 197.053 122.853 196.587 122.48C195.382 121.779 194.036 121.356 192.648 121.243C191.259 121.129 189.862 121.329 188.56 121.826C185.853 122.76 183.613 124.72 181.467 126.68C181.094 127.053 181.187 127.519 181.747 127.612C182.073 127.679 182.41 127.671 182.732 127.59C183.056 127.51 183.357 127.358 183.613 127.146ZM29.2403 91.213C27.3903 91.0463 25.5869 90.54 23.9204 89.7197C23.2525 89.3164 22.6916 88.758 22.2855 88.0919C21.8793 87.4258 21.6397 86.6715 21.587 85.8931C21.587 84.493 23.3604 82.5331 21.587 81.6931C20.6789 81.2914 19.6739 81.1618 18.6937 81.3197C17.5806 81.3159 16.4753 81.5054 15.427 81.8797C14.9604 81.9731 14.1203 82.3464 14.2137 82.9064C14.307 83.4664 15.427 83.373 15.8003 83.1864C16.6244 82.9711 17.4693 82.8459 18.3204 82.813C19.067 82.813 19.907 82.9064 19.627 83.8398C19.2961 84.4915 19.0454 85.181 18.8804 85.8931C18.806 86.6596 18.9347 87.4321 19.2537 88.1331C20.6536 91.4931 24.387 92.2397 27.6537 92.6131C27.9799 92.6788 28.3168 92.671 28.6397 92.5903C28.9625 92.5095 29.2634 92.3579 29.5203 92.1463C29.8937 91.773 29.8937 91.3064 29.2403 91.213ZM53.8802 144.6C52.8271 149.124 52.5119 153.788 52.9469 158.413C53.0402 159.252 55.7469 158.693 55.6536 157.76C55.2123 153.228 55.5277 148.654 56.5869 144.226C56.7736 143.386 54.0669 143.759 53.8802 144.6ZM38.7601 134.519C35.7647 136.235 33.3821 138.846 31.9469 141.986C31.4281 143.445 30.7718 144.851 29.9868 146.186C29.6476 146.869 29.1321 147.449 28.4935 147.866C27.6536 148.52 26.5336 148.147 25.6002 148.147C24.0847 148.047 22.5672 148.308 21.1719 148.908C19.777 149.508 18.5439 150.431 17.5736 151.599C16.6647 152.665 16.07 153.963 15.8558 155.348C15.6415 156.732 15.8162 158.149 16.3602 159.44C16.6403 160.093 19.2536 159.159 19.0669 158.693C18.5176 157.368 18.3663 155.913 18.6315 154.504C18.8967 153.095 19.567 151.794 20.5603 150.76C21.0182 150.231 21.5961 149.819 22.2457 149.56C22.8951 149.3 23.5973 149.199 24.2936 149.266C26.0323 149.47 27.7946 149.246 29.4268 148.613C32.0402 147.399 33.1602 144.88 34.2802 142.359C35.5591 139.112 37.85 136.363 40.8135 134.519C41.3735 134.239 41.0935 134.053 40.7202 133.96C40.0215 133.911 39.3278 134.109 38.7601 134.519ZM34.7472 121.919C36.9637 121.919 38.7605 120.122 38.7605 117.906C38.7605 115.689 36.9637 113.893 34.7472 113.893C32.5307 113.893 30.7338 115.689 30.7338 117.906C30.7338 120.122 32.5307 121.919 34.7472 121.919ZM43.8 78.7998C43.7874 79.0649 43.8288 79.3298 43.9216 79.5785C44.0144 79.8272 44.1568 80.0544 44.3401 80.2464C44.5234 80.4384 44.7437 80.5912 44.9878 80.6955C45.2319 80.7998 45.4946 80.8534 45.7601 80.8531C46.0297 80.8531 46.2967 80.8 46.5459 80.6968C46.795 80.5936 47.0213 80.4424 47.212 80.2517C47.4027 80.0611 47.5539 79.8347 47.6571 79.5856C47.7603 79.3364 47.8134 79.0694 47.8134 78.7998C47.8137 78.5343 47.7602 78.2716 47.6559 78.0275C47.5516 77.7833 47.3988 77.563 47.2068 77.3797C47.0148 77.1964 46.7876 77.054 46.5389 76.9612C46.2902 76.8684 46.0252 76.8271 45.7601 76.8397C45.5027 76.8397 45.2478 76.8904 45.01 76.9889C44.7722 77.0874 44.5561 77.2318 44.3741 77.4138C44.1921 77.5958 44.0477 77.8119 43.9492 78.0497C43.8507 78.2875 43.8 78.5424 43.8 78.7998ZM76.8399 170.64C76.8639 171.242 77.1204 171.812 77.5555 172.229C77.9905 172.646 78.5702 172.88 79.1733 172.88C79.5122 172.949 79.8621 172.941 80.1978 172.857C80.5334 172.775 80.8464 172.618 81.1143 172.399C81.3817 172.18 81.5974 171.905 81.7459 171.593C81.9693 171.122 82.0285 170.589 81.914 170.08C81.7995 169.572 81.518 169.116 81.1143 168.786C80.8464 168.567 80.5334 168.411 80.1978 168.328C79.8622 168.244 79.5122 168.237 79.1733 168.306C78.5544 168.306 77.9609 168.552 77.5233 168.99C77.0857 169.427 76.8399 170.021 76.8399 170.64Z" fill="#34C94B"/>
  <path d="M31.2934 192.199C31.48 192.292 31.8534 191.826 32.5067 190.986C33.4299 189.803 34.4275 188.681 35.4934 187.626C37.1448 185.974 39.1131 184.672 41.28 183.8L43.24 182.959L45.2933 182.493C46.8931 182.192 48.5285 182.129 50.1466 182.306L55.5599 182.866L61.6266 183.706C65.9573 184.312 70.1921 185.472 74.2265 187.159L81.0399 189.959C83.6022 190.995 86.3103 191.625 89.0665 191.826C90.5386 191.887 92.0125 191.762 93.4531 191.453C94.9368 191.079 96.3761 190.547 97.7465 189.866C100.278 188.412 102.601 186.622 104.653 184.546C106.706 182.586 108.479 180.719 110.439 179.039C112.279 177.424 114.357 176.101 116.6 175.119C120.827 173.155 125.482 172.288 130.133 172.6C134.613 172.973 139.093 173.999 143.573 174.186C148.053 174.373 152.346 173.719 155.893 171.759C156.725 171.244 157.507 170.65 158.226 169.986L159.253 168.96L160.093 167.839C161.049 166.474 161.774 164.96 162.239 163.36C162.917 160.776 162.819 158.049 161.96 155.519C161.403 153.974 160.51 152.572 159.347 151.413C158.599 150.666 158.04 150.293 157.946 150.386C157.853 150.48 158.133 151.039 158.693 151.88C159.419 153.175 159.983 154.554 160.373 155.986C160.808 158.197 160.647 160.484 159.906 162.612C159.421 163.909 158.761 165.133 157.946 166.253L157.199 167.093L156.36 167.839C155.755 168.318 155.098 168.725 154.4 169.053C151.072 170.569 147.385 171.118 143.759 170.64C139.746 170.359 135.36 169.146 130.413 168.68C125.079 168.18 119.706 169.08 114.827 171.293C112.253 172.426 109.863 173.936 107.733 175.772C105.493 177.639 103.626 179.599 101.666 181.466C99.9016 183.291 97.8912 184.862 95.6931 186.133C94.6926 186.674 93.6258 187.082 92.5198 187.347C91.4478 187.582 90.3496 187.676 89.2532 187.626C86.923 187.453 84.6291 186.95 82.4399 186.133L75.6266 183.426C73.3702 182.57 71.0637 181.853 68.72 181.279L62.0933 180.16L55.9333 179.599C53.9733 179.412 52.1067 179.226 50.1466 179.226C48.3276 179.223 46.5132 179.41 44.7333 179.786C43.8934 179.967 43.0786 180.249 42.3067 180.626L40.1601 181.652C37.8858 182.847 35.8837 184.499 34.28 186.506C33.3049 187.754 32.4605 189.099 31.7601 190.519C31.2934 191.546 31.2001 192.106 31.2934 192.199ZM55.1866 76.1864L53.9733 75.9998C45.2 74.7864 36.4267 86.4531 34.3734 102.04C32.3201 117.626 37.64 131.252 46.4133 132.466C47.6267 132.653 51.1733 133.026 50.1466 132.186C44.5467 127.613 44.1733 120.986 41.84 113.24C39.5067 105.493 45.1067 90.093 48.1867 83.5597C51.2666 77.0264 55.1866 76.1864 55.1866 76.1864Z" fill="#34C94B"/>
  <path d="M158.693 88.6931C160.093 78.2398 157.48 67.5064 154.213 57.6131C152.44 52.0131 149.639 46.5998 145.253 42.6798C143.094 40.5771 140.751 38.6718 138.253 36.9866L136.293 35.9599C135.453 35.5865 136.479 36.0532 136.013 35.8666L134.146 34.8399C132.373 33.7199 130.599 32.5999 128.733 31.5733C127.451 30.6516 126.074 29.8694 124.626 29.2399C123.344 28.9919 122.015 29.2245 120.893 29.8933C120.24 30.1732 119.12 31.1065 120.24 31.5733H120.427C120.706 31.6665 120.147 31.3866 120.52 31.5733L121.173 31.9466L123.319 33.1599L128.266 36.1465L131.627 38.0132C134.154 39.3609 136.478 41.0575 138.532 43.0532C140.745 44.8565 142.692 46.9615 144.319 49.3065C145.939 51.7515 147.255 54.3841 148.24 57.1465C149.665 61.2427 150.849 65.4187 151.786 69.6531C153.542 76.1565 154.049 82.9341 153.279 89.6264C153.093 91.213 158.506 90.1864 158.693 88.6931ZM59.2932 134.146C50.8933 136.573 46.0399 127.053 44.36 120.333C41.84 110.439 42.96 99.333 46.5999 89.8131C48.2633 85.1682 50.9051 80.935 54.3466 77.3998C54.4556 77.3068 54.5355 77.1845 54.577 77.0474C54.6184 76.9102 54.6195 76.7641 54.5803 76.6263C54.5409 76.4886 54.4627 76.3651 54.3551 76.2706C54.2475 76.176 54.115 76.1145 53.9733 76.0932C53.6503 75.983 53.3023 75.9684 52.9712 76.0512C52.64 76.134 52.3399 76.3106 52.1066 76.5598C44.5466 83.7465 41.28 95.0397 40.5334 105.026C40.0159 110.341 40.3945 115.704 41.6533 120.893C42.68 124.999 44.36 129.199 47.1599 132.28C48.6873 134.064 50.6997 135.366 52.9529 136.029C55.2061 136.691 57.6031 136.686 59.8532 136.013C61.4399 135.546 60.9732 133.586 59.2932 134.146Z" fill="#34C94B"/>
  <path d="M49.4934 103.066C48.5429 109.232 48.6692 115.516 49.8667 121.639C50.7068 125.933 52.2934 130.693 55.5601 133.68C58.8267 136.666 63.3067 136.573 67.1334 134.987C70.96 133.4 74.6 129.48 76.9333 125.466C79.8255 120.179 81.7831 114.432 82.7199 108.479C83.9177 102.168 84.0439 95.6998 83.0933 89.3465C82.44 84.7731 81.0399 79.8265 77.96 76.2798C74.8799 72.7332 71.1466 72.3598 67.1334 73.4798C63.12 74.5998 58.2667 79.0798 55.6533 83.5598C53.04 88.0398 50.4267 96.2531 49.4934 103.066C49.2134 104.746 54.6267 103.813 54.8134 102.226C55.5524 96.5211 57.1247 90.9551 59.4801 85.7064C61.16 82.1598 63.4 78.2398 66.8533 76.0932L67.5067 75.7198C66.9467 75.9998 68.2534 75.5332 67.6 75.7198L68.0667 75.5332C67.32 75.7198 67.9733 75.5332 68.16 75.5332C68.3466 75.5332 67.9733 75.6264 68.16 75.6264C68.3466 75.6264 67.9733 75.5332 68.44 75.6264C69.737 75.8164 70.9433 76.4033 71.8933 77.3064C74.8799 80.0132 76.28 84.1198 77.1199 87.8531C79.64 98.773 78.2399 111.093 73.9466 121.453C72.36 125.279 70.2133 129.386 66.9467 132.093C66.369 132.562 65.7433 132.969 65.08 133.307C64.0533 133.587 65.8267 132.932 65.08 133.307L64.52 133.493C65.2667 133.307 64.6133 133.4 64.4267 133.4H63.4933C62.8318 133.217 62.2023 132.933 61.6267 132.559C57.9867 130.133 56.4 125.373 55.4667 121.266C53.9734 115.106 54.0667 108.573 54.8134 102.32C55.0933 100.453 49.68 101.48 49.4934 103.066ZM143.573 148.52C134.987 148.052 130.226 139.28 128.453 131.906C125.933 121.826 127.427 110.533 131.44 101.106C132.161 99.3528 133.035 97.6662 134.053 96.0664L135.36 94.1998C135.601 94.0063 135.819 93.7872 136.013 93.5464L136.199 93.3597H136.293C137.04 92.7064 136.947 91.9598 135.826 91.7731C134.465 91.5999 133.091 91.9686 132 92.7997C129.816 94.8925 128.071 97.399 126.866 100.173C124.662 104.87 123.184 109.873 122.48 115.013C120.986 124.999 121.827 136.573 128.36 144.786C129.754 146.659 131.533 148.211 133.578 149.338C135.623 150.466 137.885 151.141 140.214 151.319C141.566 151.401 142.909 151.04 144.04 150.293C144.786 149.639 144.786 148.706 143.573 148.613V148.52Z" fill="#34C94B"/>
  <path d="M145.906 149.639C141.986 149.079 139.093 146.092 137.132 142.733C134.814 138.31 133.477 133.439 133.212 128.453C132.676 122.236 133.277 115.974 134.986 109.973C136.326 104.805 138.674 99.9525 141.893 95.6931C144.132 92.9864 147.306 89.9997 151.133 89.8131C154.959 89.6264 158.133 92.4264 160.186 95.4131C162.239 98.3997 164.293 104.28 164.946 109.04C165.677 115.182 165.329 121.404 163.919 127.426C162.636 133.373 160.09 138.975 156.453 143.853C153.932 147.026 150.293 150.2 145.906 149.639C145.237 149.597 144.574 149.795 144.039 150.2C143.666 150.573 143.666 150.946 144.226 151.039C154.493 152.253 161.493 141.799 164.666 133.493C166.994 127.258 168.134 120.641 168.026 113.986C167.933 108.293 166.999 102.413 164.479 97.2797C162.612 93.5464 159.72 89.9997 155.519 88.8797C151.319 87.7597 147.119 89.1598 143.666 91.5865C140.213 94.0131 136.572 99.4264 134.519 104.093C131.97 110.098 130.546 116.52 130.32 123.04C129.992 129.013 130.914 134.989 133.026 140.587C134.706 144.507 137.32 148.52 141.426 150.2C142.327 150.577 143.265 150.859 144.226 151.039C144.573 151.093 144.93 151.072 145.268 150.976C145.606 150.878 145.92 150.71 146.186 150.48C146.56 150.107 146.56 149.732 145.906 149.639Z" fill="#34C94B"/>
  <path d="M138.439 117.719C136.386 133.307 141.706 146.84 150.48 148.053C159.253 149.266 168.026 137.506 170.079 121.92C172.132 106.333 166.813 92.7064 158.04 91.5864C149.266 90.4664 140.492 102.133 138.439 117.719ZM168.866 155.893C173.359 159.951 177.628 164.251 181.652 168.773C182.12 169.24 184.639 168.306 184.173 167.839C180.172 163.295 175.902 158.993 171.386 154.959C170.826 154.493 168.399 155.519 168.866 155.893Z" fill="#34C94B"/>
  <path d="M149.173 150.386C149.173 150.386 151.973 152.72 156.08 155.707C160.186 158.693 161.586 157.387 161.586 157.387L162.8 154.959L156.639 146.84C155.616 147.382 154.514 147.761 153.372 147.959C152.537 148.029 151.727 148.283 151.001 148.703C150.275 149.123 149.651 149.698 149.173 150.386ZM57.8934 104C57.411 108.531 57.4423 113.102 57.9867 117.626C58.36 120.333 59.0134 123.599 60.88 125.747C62.7467 127.893 64.8933 127.426 66.76 126.213C68.6266 124.999 70.3066 122.013 71.3333 119.586C72.936 115.478 74.0026 111.18 74.5067 106.799C75.1115 102.282 75.2054 97.7112 74.7866 93.173C74.4133 89.0664 72.9199 79.7331 66.76 82.3464C63.8667 83.5598 62.3734 86.733 61.2534 89.4397C59.477 94.1178 58.3466 99.0162 57.8934 104C57.8 105.026 60.5067 104.466 60.6 103.626C60.9988 99.6406 61.7802 95.7024 62.9334 91.8664C63.7733 89.2531 64.8 86.3598 66.6667 84.3065L67.5066 83.5598L67.88 83.3731C67.9734 83.2797 67.6933 83.2797 67.7867 83.3731C68.4225 83.5655 68.9791 83.9584 69.3733 84.4931C70.96 86.5464 71.52 89.5331 71.8933 91.9598C72.9131 99.937 72.2776 108.039 70.0267 115.759C69.3725 118.725 68.1696 121.543 66.48 124.067C66.0087 124.741 65.4054 125.312 64.7066 125.747C64.9867 125.652 64.8 125.652 64.6134 125.652L63.68 124.999C61.72 123.133 61.16 119.773 60.7867 117.253C60.1653 112.736 60.1026 108.159 60.6 103.626C60.6934 102.6 57.9867 103.066 57.8934 104Z" fill="#34C94B"/>
  <path d="M154.867 149.079C154.774 149.266 154.774 149.453 154.679 149.639V149.359C154.679 149.432 154.664 149.503 154.631 149.568C154.598 149.633 154.551 149.689 154.493 149.732L154.679 149.453C154.517 149.662 154.33 149.85 154.12 150.013L154.4 149.826L153.84 150.2L154.213 150.013H154.027C153.883 150.054 153.751 150.125 153.639 150.221C153.526 150.318 153.435 150.438 153.374 150.573C153.288 150.66 153.24 150.778 153.24 150.899C153.24 151.021 153.288 151.139 153.374 151.226C153.473 151.32 153.59 151.393 153.718 151.441C153.846 151.49 153.983 151.512 154.12 151.506C154.295 151.547 154.476 151.551 154.653 151.52C154.829 151.488 154.997 151.42 155.147 151.319C155.712 151.087 156.221 150.737 156.64 150.293C156.884 150.093 157.076 149.836 157.2 149.546L157.48 148.706C157.484 148.597 157.46 148.488 157.411 148.39C157.363 148.293 157.29 148.209 157.2 148.147H156.266L155.24 148.52C155.054 148.706 154.774 148.893 154.774 149.173L154.867 149.079ZM157.106 152.067C157.013 152.253 157.013 152.44 156.919 152.626V152.346C156.919 152.418 156.902 152.491 156.87 152.555C156.838 152.62 156.791 152.676 156.733 152.72L156.919 152.44L156.36 152.999L156.639 152.813L156.08 153.186L156.453 152.999H156.266C156.123 153.039 155.991 153.111 155.878 153.208C155.765 153.304 155.675 153.424 155.613 153.559C155.528 153.646 155.48 153.764 155.48 153.886C155.48 154.008 155.528 154.126 155.613 154.213C155.712 154.307 155.83 154.381 155.958 154.428C156.086 154.476 156.223 154.498 156.36 154.493C156.713 154.53 157.069 154.464 157.387 154.306C157.934 154.042 158.437 153.696 158.879 153.279C159.066 152.999 159.347 152.813 159.44 152.533L159.72 151.692C159.723 151.583 159.699 151.475 159.651 151.378C159.602 151.28 159.53 151.195 159.44 151.133L158.972 150.946H158.506L157.48 151.319C157.292 151.506 157.013 151.692 157.013 151.973L157.106 152.067Z" fill="#34C94B"/>
  <path d="M143.106 118.84C142.421 123.465 142.579 128.177 143.573 132.746C144.319 135.826 145.719 139.186 148.24 141.146C150.76 143.106 153.466 142.827 156.08 141.893C158.693 140.96 161.493 138.066 163.173 135.267C165.374 131.461 166.861 127.286 167.56 122.946C168.384 118.288 168.416 113.523 167.653 108.854C167 105.493 165.879 101.853 163.36 99.4264C160.839 96.9997 158.599 96.9997 155.893 97.7464C153.186 98.4931 149.732 101.386 147.866 104.466C145.29 108.871 143.668 113.768 143.106 118.84C143.013 119.12 145.719 118.933 145.813 118.092C146.348 113.958 147.513 109.929 149.266 106.146C150.666 103.44 152.44 100.546 155.146 98.9597C157.853 97.3731 159.159 98.773 160.653 100.173C162.146 101.573 164.013 105.4 164.666 108.199C166.415 116.351 165.533 124.848 162.146 132.466C161.023 135.54 159.126 138.272 156.639 140.399C155.897 141.02 154.988 141.41 154.026 141.52C152.897 141.453 151.818 141.028 150.946 140.306C148.24 138.346 146.933 134.799 146.279 131.72C145.331 127.239 145.173 122.627 145.813 118.092C145.813 117.906 143.2 118.092 143.106 118.84ZM145.16 91.0264C146.557 83.1406 147.213 75.1413 147.12 67.1332C147.12 61.4398 146.746 55.5599 144.88 50.1466C142.689 44.3781 139.096 39.2459 134.426 35.2133C129.528 30.9146 123.619 27.9282 117.253 26.5333C109.973 24.9467 102.786 25.4133 95.5061 26.8133C84.0261 29.1466 72.9195 33.9066 65.0795 42.9599C60.8375 48.0844 57.4353 53.8494 54.9996 60.0399C53.5636 63.4626 52.4997 67.0297 51.8263 70.6798C51.576 72.3476 51.5134 74.0381 51.6396 75.7198C51.6396 75.9065 51.7329 76.0932 51.7329 76.2798C52.3862 78.5198 57.7996 77.1198 57.1462 74.7865C57.1243 74.6292 57.0932 74.4734 57.0529 74.3198V73.0131C57.2073 70.5443 57.6458 68.1015 58.3596 65.7331C60.1813 59.1194 63.1853 52.8902 67.2261 47.3466C70.2579 43.0365 74.1313 39.3853 78.6128 36.6132C79.5654 36.0073 80.564 35.4768 81.5994 35.0266C82.776 34.3902 83.9918 33.8291 85.2395 33.3466L88.5995 32.2266L92.7061 31.0133C95.5321 30.3043 98.4 29.7744 101.293 29.4267C104.611 29.0536 107.961 29.0536 111.28 29.4267C117.166 30.2136 122.759 32.4739 127.539 35.9981C132.32 39.5222 136.133 44.1961 138.626 49.5866C140.866 54.3465 141.426 59.7598 141.613 64.7998C141.928 73.5836 141.302 82.3758 139.746 91.0264C139.774 91.1882 139.741 91.3546 139.653 91.493C139.185 94.0131 144.692 93.2664 145.16 91.0264Z" fill="white"/>
  <path d="M52.2932 77.6798L57.8932 78.7998C58.2719 78.8394 58.6537 78.7622 58.9873 78.5787C59.321 78.3952 59.5905 78.1141 59.7599 77.7731C60.7349 73.2317 62.1413 68.7938 63.9598 64.5198C67.0399 56.5865 71.2398 48.3732 77.8665 42.8665C82.2531 39.2266 87.6664 37.5466 93.1731 36.5199C99.2622 35.2289 105.551 35.1972 111.653 36.4266C116.107 37.2137 120.303 39.0714 123.88 41.8399C128.616 45.5304 132.314 50.3862 134.613 55.9331C135.709 58.5894 136.431 61.385 136.759 64.2398C137.024 67.629 136.962 71.0359 136.572 74.4131C136.108 80.0162 135.361 85.5922 134.333 91.1197C134.315 91.4381 134.253 91.7524 134.146 92.0531C134.053 92.5197 134.706 92.7997 135.08 92.7997L139.466 93.2663C140.026 93.2663 140.96 93.0797 141.24 92.4264C141.519 91.773 140.96 91.4931 140.399 91.3997L136.013 91.0263L136.947 91.773C137.786 87.4797 138.346 83.0931 138.907 78.7064C139.653 71.8931 140.306 64.9865 138.439 58.3598C135.453 47.9065 127.053 38.6666 116.6 35.4933C110.778 33.8501 104.7 33.3119 98.6797 33.9065C95.0166 34.2657 91.3932 34.9529 87.8531 35.9599C84.9136 36.7372 82.0893 37.8983 79.4531 39.4132C71.6131 44.0799 66.4799 52.5731 62.8398 60.6932C61.2777 64.2575 59.9068 67.9026 58.7332 71.6131C58.0319 73.5935 57.4705 75.6207 57.0532 77.6798C57.0574 77.7303 57.0513 77.7812 57.0352 77.8293C57.0192 77.8774 56.9936 77.9218 56.9599 77.9597L58.8266 76.9331L53.2266 75.9064C52.0132 75.6264 50.4266 77.3997 52.2932 77.6798Z" fill="#34C94B"/>
  <path d="M61.4402 65.8265L68.7202 74.5998C69.0935 75.1598 70.0269 74.9732 70.4935 74.7865C70.9602 74.5998 71.6135 73.9465 71.1468 73.4798L63.9602 64.7065C63.7093 64.481 63.3931 64.3412 63.0574 64.3077C62.7217 64.2741 62.384 64.3484 62.0935 64.5199C61.7202 64.7065 61.0669 65.3598 61.4402 65.8265Z" fill="#34C94B"/>
  <path d="M63.9596 61.1598L71.3328 73.7598C71.8928 74.6931 74.5062 73.7598 73.8529 72.6398L66.4795 60.0398C65.9195 59.1065 63.3062 60.0398 63.9596 61.1598Z" fill="#34C94B"/>
  <path d="M102.693 35.4933C102.519 35.21 102.27 34.981 101.973 34.8325C101.676 34.684 101.343 34.6219 101.013 34.6533C100.453 34.5599 99.4261 34.9333 99.0527 34.6533C98.6395 34.4406 98.1618 34.3896 97.713 34.5104C97.2642 34.6313 96.8766 34.9151 96.6261 35.3066C96.2527 36.2399 95.6927 37.08 95.3194 38.1066L97.6528 37.4533C96.2527 36.7066 94.3861 35.2133 92.7061 36.1466C92.3673 36.3729 92.0885 36.6779 91.8934 37.0355C91.6983 37.3931 91.5929 37.7927 91.5861 38.2C91.306 39.2266 90.8394 40.2533 90.6528 41.2799L93.2661 40.6266C91.8661 39.32 90.3727 38.2 88.9728 36.9866C87.5727 35.7733 86.4527 36.52 86.3594 37.64L86.1728 44.1733L88.5994 43.3332L82.9061 38.5733C82.1594 37.9199 80.3861 38.6666 80.4794 39.6933L81.4127 48.9332L82.1595 47.7199C83.5594 47.9999 83.9328 47.9999 83.4662 47.6266L83.0928 47.1599C82.7922 46.8585 82.5403 46.5121 82.3461 46.1332L80.6662 43.5199C79.8261 42.3066 78.3328 39.88 76.5594 41.6532C74.7861 43.4266 76.1861 42.7732 76.3727 43.4266C76.4606 44.4995 76.6481 45.5618 76.9329 46.5999C77.2168 48.7791 77.7814 50.9123 78.6127 52.9466L80.9461 51.7332C78.7061 50.0532 77.5861 46.9733 75.8128 44.8266C75.2528 44.0799 73.1995 44.4532 73.1995 45.4799C73.4795 49.4932 75.2528 53.2265 75.4394 57.2399L77.8662 56.3999C75.5651 54.5341 73.5247 52.3681 71.7995 49.9599C71.2395 49.1199 68.9061 49.7733 69.2794 50.9865C70.1568 54.0681 70.7503 57.2235 71.0528 60.4132C71.4746 63.6309 71.6618 66.875 71.6128 70.1199L74.2261 69.3732C72.9195 67.4131 72.2661 64.8932 71.4262 62.7465C70.7591 60.4487 69.8519 58.2276 68.7194 56.1199C68.0662 55.1866 65.4528 56.2132 66.1995 57.3332C66.9462 58.4532 68.1594 61.8132 68.9061 64.0532C69.6528 66.2932 70.3994 68.6265 71.7061 70.5865C73.0128 72.5465 74.3194 70.8665 74.3194 69.8398C74.3655 66.564 74.1783 63.2891 73.7594 60.0399C73.4572 56.7275 72.8638 53.4481 71.9862 50.2399L69.3728 51.1732C71.1743 53.7202 73.3447 55.985 75.8128 57.8932C76.3728 58.4532 78.2394 57.9866 78.2394 57.0532C77.9595 53.0399 76.1862 49.3065 75.9995 45.2933L73.3861 45.9466C75.2528 48.2799 76.3727 51.4533 78.8928 53.3199C79.5462 53.7865 81.7861 53.2265 81.3194 52.1999C80.5641 50.3727 80.0314 48.4611 79.7328 46.5066C79.5462 45.3866 79.2661 44.36 79.0795 43.24C79.0949 42.8951 79.0634 42.5497 78.9861 42.2132C78.8928 42.12 78.8928 41.9333 78.9861 42.12C79.0795 42.3066 76.4661 42.3066 76.8395 42.9599C77.2069 43.5161 77.6123 44.0463 78.0527 44.5466C78.6127 45.3866 79.1727 46.2266 79.6395 47.0666C80.1061 47.9066 81.5994 50.1466 83.3728 49.3065C83.6113 49.2412 83.8182 49.0918 83.9554 48.8861C84.0926 48.6803 84.1508 48.4319 84.1194 48.1865L83.1861 38.9466L80.8527 40.0666L86.5461 44.8266C87.1061 45.3866 88.8794 44.9199 88.9728 43.9866L89.1594 37.4533L86.5461 38.1066C87.8528 39.4132 89.4394 40.5332 90.746 41.7466C92.0527 42.9599 93.1728 42.2132 93.3595 41.0932C93.4616 40.5085 93.6503 39.9423 93.9195 39.4132C94.1613 38.8483 94.3185 38.2508 94.3861 37.64C94.3861 37.3599 94.2928 37.3599 93.8261 37.64C93.3595 37.9199 93.1728 37.8266 93.7328 38.0133L94.2928 38.2933L95.5995 39.0399C95.9987 39.2474 96.4618 39.2953 96.8951 39.174C97.3283 39.0527 97.6992 38.7712 97.9327 38.3866C98.3061 37.3599 98.8661 36.52 99.2394 35.5866L96.906 36.2399C97.4944 36.5928 98.1891 36.7252 98.8661 36.6133C99.1461 36.6133 100.079 36.4266 100.266 36.6133C100.453 36.7999 103.533 36.6133 102.693 35.4933ZM63.9602 89.1598L70.9601 86.0797H69.3735C68.8135 85.7998 68.4401 86.3598 67.9734 86.7331L67.0401 87.4798L65.2668 89.0664C63.8668 90.2798 62.5601 91.4931 61.0668 92.6131C59.5734 93.7331 60.4135 93.3597 60.7868 93.8264C61.1602 94.2931 62.0935 94.1064 62.5601 93.9197L72.0801 90.2798L70.5867 88.9731C66.9468 91.3998 62.6535 93.7331 60.1334 97.4664C59.4802 98.5864 61.5335 98.4931 62.0001 98.3064C65.8268 96.8131 69.5601 95.1331 73.2001 93.3597L71.8001 92.0531L65.5468 96.4398C63.5322 97.662 61.6818 99.1361 60.0402 100.826C59.0134 101.946 60.9735 102.226 61.7202 101.946C65.5468 100.173 69.4667 98.5864 73.2001 96.7197L71.7067 95.413L64.9868 100.266C62.7697 101.77 60.7881 103.594 59.1068 105.68C58.2668 106.799 60.0402 107.267 60.7868 106.799L73.4801 99.6131L71.9868 98.3064C67.1335 102.133 62.3734 106.053 58.5468 110.907C57.6135 112.119 59.4802 112.399 60.2268 112.026C65.1734 109.693 68.4401 105.12 73.2001 102.506L71.4268 101.48C69.1868 103.626 67.0401 106.053 64.8001 108.2C62.2924 110.428 60.0103 112.897 57.9868 115.573C57.3335 116.507 59.0134 116.693 59.4802 116.6C62.0935 116.039 64.3335 113.706 66.4801 112.119L73.7601 106.706L71.7067 105.773C67.1335 109.786 62.5601 113.986 59.7601 119.493C59.2001 120.52 60.9735 120.613 61.6268 120.333C63.6065 119.175 65.4264 117.763 67.0401 116.133L72.9201 110.813L70.6801 110.066C68.3467 112.399 66.2001 114.827 64.1468 117.253C62.0935 119.679 60.6002 121.826 60.0402 124.72C59.7601 126.027 62.0935 125.373 62.5601 124.906C65.7334 121.826 68.9067 118.747 71.9868 115.573L69.7468 114.827L65.1734 120.986C63.9602 122.666 62.8402 124.346 63.1201 126.4C63.4002 128.453 65.9201 126.959 65.8268 125.747C65.7334 124.533 67.1335 122.107 68.2535 120.613L71.9868 115.573C73.1068 114.173 70.4935 114.079 69.7468 114.827L60.3201 124.253L62.7468 124.44C63.3068 121.639 65.0801 119.493 66.8534 117.346C68.6268 115.2 70.7734 112.96 72.9201 110.813C73.0036 110.717 73.0614 110.601 73.0879 110.477C73.1143 110.353 73.1086 110.224 73.0713 110.102C73.0337 109.981 72.9659 109.871 72.8742 109.783C72.7826 109.695 72.6698 109.632 72.5468 109.6C72.2217 109.511 71.8792 109.507 71.5522 109.588C71.2253 109.67 70.925 109.835 70.6801 110.066L65.4535 114.827C63.9427 116.364 62.2502 117.712 60.4135 118.84L62.2802 119.679C65.0801 114.359 69.5601 110.346 73.9467 106.426C74.4134 106.053 74.2268 105.586 73.7601 105.306C73.4663 105.191 73.1471 105.156 72.8353 105.205C72.5236 105.255 72.2307 105.386 71.9868 105.586L65.4535 110.439L62.2802 112.773C61.363 113.699 60.2453 114.402 59.0135 114.827L60.6002 115.853C62.5934 113.238 64.8448 110.83 67.3201 108.666L73.6668 102.133C74.7868 101.106 72.7334 100.64 71.9868 101.013C67.2267 103.626 63.9602 108.293 59.1068 110.533L60.7868 111.653C64.4268 106.893 69.0934 103.16 73.7601 99.4264C75.0667 98.3997 73.2935 97.5598 72.2667 98.1198L59.6668 105.306L61.3468 106.426C62.9965 104.371 64.9474 102.578 67.1335 101.106L73.4801 96.533C74.8801 95.5997 73.0134 94.7598 71.9868 95.3198L60.6002 100.453L62.2802 101.573C63.7735 99.7998 65.8268 98.5864 67.6935 97.2797L73.5734 93.1731C74.9734 92.2397 73.1068 91.3998 72.0801 91.8664C68.3467 93.6398 64.6134 95.3198 60.8801 96.8131L62.7468 97.7464C63.8524 96.1892 65.2465 94.8585 66.8534 93.8264L72.3601 90.0931C72.5344 90.0278 72.6781 89.8997 72.7629 89.734C72.8478 89.5683 72.8677 89.3769 72.8189 89.1973C72.7864 89.0783 72.725 88.9692 72.6401 88.8797C72.1735 88.4131 71.4268 88.5998 70.8668 88.7865L61.4401 92.4264L62.8402 93.733C64.4268 92.5198 65.9201 91.2131 67.4134 89.9065L69.7468 87.8531C70.4607 87.368 71.1181 86.8045 71.7067 86.1731C71.9868 85.6131 72.0801 85.0531 71.6135 84.6798C71.1467 84.3065 69.7468 84.6798 69.0001 84.9598L62.7468 87.6665C62.2802 87.8531 61.7202 88.5064 62.0935 88.9731C62.4668 89.4397 63.4934 89.3465 63.9602 89.1598Z" fill="#34C94B"/>
  <path d="M74.1332 73.5731C74.5065 71.1465 74.8798 68.8132 75.3465 66.4798C75.7511 64.2861 76.3444 62.1314 77.1198 60.0399C78.0503 58.1678 79.2447 56.4391 80.6665 54.9065L84.9598 49.8665C90.4665 43.7065 97.0931 37.8266 105.4 36.0532C105.866 35.96 106.706 35.4932 106.613 34.9332C106.519 34.3732 105.493 34.4666 105.026 34.5599C98.2131 35.96 92.3331 39.8799 87.2932 44.5466C84.7218 47.0872 82.2915 49.7668 80.0132 52.5732C77.7732 55.1866 75.2532 57.7999 74.1332 61.0665C72.7681 65.2175 71.8606 69.5051 71.4266 73.8532C71.3332 74.9732 74.0399 74.5998 74.1332 73.5731Z" fill="#34C94B"/>
  </svg>
  
  `;

  return (
    <div>
      {/* Render the SVG using dangerouslySetInnerHTML */}
      <div dangerouslySetInnerHTML={{ __html: svgContent }} />
    </div>
  );
}

export default HeroLogo;