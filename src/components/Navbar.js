import { render } from '@testing-library/react';
import React, { useState, useEffect } from 'react';
import '../index.css';
import TabMenu from './TabMenu';


function Navbar () {

    const tabs = [
        {
            name: 'dashboard',
            icon: '<svg className="a" width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">'+
            '<path d="M16 18H18V20H16V18ZM16 23H18V25H16V23ZM16 28H18V30H16V28ZM32 20V18H20.023V20H30.8H32ZM20 23H32V25H20V23ZM20 28H32V30H20V28Z" fill="#111111"/>'+
            '</svg>',
            pos: (el) => {
                return el.getBoundingClientRect().top;
            },
        },
        {
            name: 'balance',
            icon: '<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">'+
            '<path d="M23.5999 26.48C21.8335 26.48 21.6799 25.6544 21.6799 25.52H19.7599C19.7599 26.4032 20.3935 27.968 22.6399 28.3232V29.36H24.5599V28.3232C26.4799 27.9968 27.4399 26.7584 27.4399 25.52C27.4399 24.4448 26.9407 22.64 23.5999 22.64C21.6799 22.64 21.6799 22.0352 21.6799 21.68C21.6799 21.3248 22.3519 20.72 23.5999 20.72C24.8479 20.72 24.9343 21.3344 24.9439 21.68H26.8639C26.851 21.026 26.6158 20.3959 26.197 19.8934C25.7782 19.3909 25.2009 19.0459 24.5599 18.9152V17.84H22.6399V18.8864C20.7199 19.2032 19.7599 20.4416 19.7599 21.68C19.7599 22.7552 20.2591 24.56 23.5999 24.56C25.5199 24.56 25.5199 25.2128 25.5199 25.52C25.5199 25.8272 24.9247 26.48 23.5999 26.48Z" fill="#111111"/>'+
            '<path d="M16.88 14H14V15.92H15.92V32.24C15.92 32.4946 16.0211 32.7388 16.2012 32.9188C16.3812 33.0989 16.6254 33.2 16.88 33.2H30.32C30.5746 33.2 30.8188 33.0989 30.9988 32.9188C31.1789 32.7388 31.28 32.4946 31.28 32.24V15.92H33.2V14H16.88ZM29.36 31.28H17.84V15.92H29.36V31.28Z" fill="#111111"/>'+
            '</svg>',
            pos: (el) => {
                return el.getBoundingClientRect().top;
            },
        },
        {
            name: 'buy',
            icon: '<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">'+
            '<path d="M33 16H14V18H16.3L19.58 27C19.7863 27.5835 20.1681 28.089 20.6729 28.4471C21.1778 28.8051 21.7811 28.9983 22.4 29H31V27H22.4C22.1945 26.9999 21.994 26.9365 21.8258 26.8184C21.6576 26.7003 21.5299 26.5333 21.46 26.34L21 25H30.28C30.714 24.9994 31.1361 24.8576 31.4824 24.596C31.8288 24.3344 32.0806 23.9673 32.2 23.55L34 17.27C34.0406 17.1387 34.0538 17.0004 34.0386 16.8638C34.0234 16.7271 33.9802 16.5951 33.9117 16.4759C33.8432 16.3568 33.7509 16.253 33.6404 16.1711C33.53 16.0892 33.4039 16.031 33.27 16C33.1806 15.9854 33.0894 15.9854 33 16ZM30.25 23H20.25L18.43 18H31.67L30.25 23Z" fill="#111111"/>'+
            '<path d="M22.5 33C23.3284 33 24 32.3284 24 31.5C24 30.6716 23.3284 30 22.5 30C21.6716 30 21 30.6716 21 31.5C21 32.3284 21.6716 33 22.5 33Z" fill="#111111"/>'+
            '<path d="M28.5 33C29.3284 33 30 32.3284 30 31.5C30 30.6716 29.3284 30 28.5 30C27.6716 30 27 30.6716 27 31.5C27 32.3284 27.6716 33 28.5 33Z" fill="#111111"/>'+
            '</svg>',
            pos: (el) => {
                return el.getBoundingClientRect().top;
            },
        },
        {
            name: 'settings',
            icon: '<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">'+
            '<path d="M24 28C26.206 28 28 26.206 28 24C28 21.794 26.206 20 24 20C21.794 20 20 21.794 20 24C20 26.206 21.794 28 24 28ZM24 22C25.084 22 26 22.916 26 24C26 25.084 25.084 26 24 26C22.916 26 22 25.084 22 24C22 22.916 22.916 22 24 22Z" fill="#111111"/>'+
            '<path d="M14.845 28.136L15.845 29.866C16.376 30.783 17.654 31.127 18.575 30.596L19.104 30.29C19.6825 30.7451 20.3204 31.1192 21 31.402V32C21 33.103 21.897 34 23 34H25C26.103 34 27 33.103 27 32V31.402C27.6793 31.1192 28.3172 30.7454 28.896 30.291L29.425 30.597C30.348 31.127 31.623 30.785 32.156 29.866L33.155 28.137C33.42 27.6777 33.4919 27.132 33.3548 26.6197C33.2177 26.1075 32.8829 25.6706 32.424 25.405L31.919 25.113C32.0263 24.3756 32.0263 23.6264 31.919 22.889L32.424 22.597C32.8827 22.3312 33.2174 21.8943 33.3544 21.3822C33.4914 20.87 33.4197 20.3244 33.155 19.865L32.156 18.136C31.625 17.216 30.348 16.871 29.425 17.404L28.896 17.71C28.3174 17.2549 27.6796 16.8808 27 16.598V16C27 14.897 26.103 14 25 14H23C21.897 14 21 14.897 21 16V16.598C20.3206 16.8808 19.6828 17.2546 19.104 17.709L18.575 17.403C17.651 16.872 16.375 17.216 15.844 18.135L14.845 19.864C14.58 20.3233 14.5081 20.869 14.6452 21.3813C14.7822 21.8935 15.117 22.3304 15.576 22.596L16.081 22.888C15.9732 23.6251 15.9732 24.3739 16.081 25.111L15.576 25.403C15.1171 25.669 14.7825 26.106 14.6455 26.6184C14.5084 27.1307 14.5802 27.6765 14.845 28.136ZM18.171 25.378C18.0581 24.9273 18.0006 24.4646 18 24C18 23.538 18.058 23.074 18.17 22.622C18.2227 22.4113 18.2054 22.1892 18.1206 21.9893C18.0358 21.7893 17.8881 21.6225 17.7 21.514L16.577 20.864L17.575 19.135L18.72 19.797C18.9067 19.905 19.1234 19.9496 19.3376 19.924C19.5519 19.8984 19.752 19.804 19.908 19.655C20.5845 19.0116 21.4003 18.5328 22.292 18.256C22.4968 18.1935 22.6761 18.0668 22.8036 17.8947C22.931 17.7226 22.9999 17.5142 23 17.3V16H25V17.3C25.0001 17.5142 25.0689 17.7226 25.1964 17.8947C25.3238 18.0668 25.5032 18.1935 25.708 18.256C26.5995 18.5332 27.4152 19.0119 28.092 19.655C28.2481 19.8037 28.4482 19.8979 28.6624 19.9235C28.8765 19.9491 29.0932 19.9047 29.28 19.797L30.424 19.136L31.424 20.865L30.3 21.514C30.112 21.6226 29.9644 21.7895 29.8796 21.9894C29.7948 22.1893 29.7774 22.4113 29.83 22.622C29.942 23.074 30 23.538 30 24C30 24.461 29.942 24.925 29.829 25.378C29.7765 25.5888 29.7941 25.8109 29.8791 26.0108C29.964 26.2107 30.1118 26.3775 30.3 26.486L31.423 27.135L30.425 28.864L29.28 28.203C29.0933 28.0948 28.8765 28.0501 28.6623 28.0757C28.448 28.1013 28.2479 28.1958 28.092 28.345C27.4155 28.9884 26.5996 29.4672 25.708 29.744C25.5032 29.8065 25.3238 29.9332 25.1964 30.1053C25.0689 30.2774 25.0001 30.4858 25 30.7L25.002 32H23V30.7C22.9999 30.4858 22.931 30.2774 22.8036 30.1053C22.6761 29.9332 22.4968 29.8065 22.292 29.744C21.4005 29.4668 20.5848 28.9881 19.908 28.345C19.7523 28.1954 19.552 28.1007 19.3376 28.0753C19.1232 28.0498 18.9064 28.095 18.72 28.204L17.576 28.866L16.576 27.137L17.7 26.486C17.8882 26.3775 18.0359 26.2107 18.1209 26.0108C18.2059 25.8109 18.2235 25.5888 18.171 25.378Z" fill="#111111"/>'+
            '</svg>',
            pos: (el) => {
                return el.getBoundingClientRect().top;
            },
        },
    ];

    return (
        <nav className='w-[100px] h-full z-10 left-0 fixed flex flex-col gap-4 justify-between items-center bg-white dark:bg-[#212121] transition-transform shadow-lg'>
            
            <div className='logo-app w-full h-[132px] flex items-center justify-center'>
                <svg width="70" height="76" viewBox="0 0 70 76" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="11" y="0.5" width="48" height="48" rx="12" fill="#2B79D6"/>
                    <g clip-path="url(#clip0_814_37)">
                    <path d="M44.4242 12.6212C43.7273 12.3484 42.9394 12.5 42.4242 13.0454L35.0303 20.7121L27.5757 13.0454C27.0606 12.5303 26.2727 12.3484 25.5757 12.6212C24.9091 12.9242 24.4545 13.5909 24.4545 14.3181V28.0757C24.4545 29.0757 25.2727 29.8939 26.2727 29.8939C27.2727 29.8939 28.0909 29.0757 28.0909 28.0757V18.803L33.7273 24.6212C34.0606 24.9848 34.5454 25.1666 35.0303 25.1666C35.5151 25.1666 36 24.9545 36.3333 24.6212L41.9091 18.8333V28.0757C41.9091 29.0757 42.7273 29.8939 43.7273 29.8939C44.7273 29.8939 45.5454 29.0757 45.5454 28.0757V14.3181C45.5454 13.5909 45.0909 12.9242 44.4242 12.6212Z" fill="white"/>
                    <path d="M39.5151 32.8636H30.5454C29.5454 32.8636 28.7272 33.6818 28.7272 34.6818C28.7272 35.6818 29.5454 36.5 30.5454 36.5H39.5151C40.5151 36.5 41.3333 35.6818 41.3333 34.6818C41.3333 33.6818 40.5151 32.8636 39.5151 32.8636Z" fill="white"/>
                    </g>
                    <path d="M5.13636 71.5H1.01136V59.8636H5.17045C6.34091 59.8636 7.34848 60.0966 8.19318 60.5625C9.03788 61.0246 9.6875 61.6894 10.142 62.5568C10.6004 63.4242 10.8295 64.4621 10.8295 65.6705C10.8295 66.8826 10.6004 67.9242 10.142 68.7955C9.6875 69.6667 9.03409 70.3352 8.18182 70.8011C7.33333 71.267 6.31818 71.5 5.13636 71.5ZM3.47159 69.392H5.03409C5.76136 69.392 6.37311 69.2633 6.86932 69.0057C7.36932 68.7443 7.74432 68.3409 7.99432 67.7955C8.24811 67.2462 8.375 66.5379 8.375 65.6705C8.375 64.8106 8.24811 64.108 7.99432 63.5625C7.74432 63.017 7.37121 62.6155 6.875 62.358C6.37879 62.1004 5.76705 61.9716 5.03977 61.9716H3.47159V69.392ZM15.0952 71.6648C14.5384 71.6648 14.0421 71.5682 13.6065 71.375C13.1709 71.178 12.8262 70.8883 12.5724 70.5057C12.3224 70.1193 12.1974 69.6383 12.1974 69.0625C12.1974 68.5777 12.2865 68.1705 12.4645 67.8409C12.6425 67.5114 12.8849 67.2462 13.1918 67.0455C13.4986 66.8447 13.8471 66.6932 14.2372 66.5909C14.6312 66.4886 15.044 66.4167 15.4759 66.375C15.9834 66.322 16.3925 66.2727 16.7031 66.2273C17.0137 66.178 17.2391 66.1061 17.3793 66.0114C17.5194 65.9167 17.5895 65.7765 17.5895 65.5909V65.5568C17.5895 65.197 17.4759 64.9186 17.2486 64.7216C17.0251 64.5246 16.7069 64.4261 16.294 64.4261C15.8584 64.4261 15.5118 64.5227 15.2543 64.7159C14.9967 64.9053 14.8262 65.1439 14.7429 65.4318L12.5043 65.25C12.6179 64.7197 12.8414 64.2614 13.1747 63.875C13.508 63.4848 13.938 63.1856 14.4645 62.9773C14.9948 62.7652 15.6084 62.6591 16.3054 62.6591C16.7902 62.6591 17.2543 62.7159 17.6974 62.8295C18.1444 62.9432 18.5402 63.1193 18.8849 63.358C19.2334 63.5966 19.508 63.9034 19.7088 64.2784C19.9096 64.6496 20.0099 65.0947 20.0099 65.6136V71.5H17.7145V70.2898H17.6463C17.5062 70.5625 17.3187 70.803 17.0838 71.0114C16.849 71.2159 16.5668 71.3769 16.2372 71.4943C15.9077 71.608 15.527 71.6648 15.0952 71.6648ZM15.7884 69.9943C16.1444 69.9943 16.4588 69.9242 16.7315 69.7841C17.0043 69.6402 17.2183 69.447 17.3736 69.2045C17.5289 68.9621 17.6065 68.6875 17.6065 68.3807V67.4545C17.5308 67.5038 17.4266 67.5492 17.294 67.5909C17.1652 67.6288 17.0194 67.6648 16.8565 67.6989C16.6937 67.7292 16.5308 67.7576 16.3679 67.7841C16.205 67.8068 16.0573 67.8277 15.9247 67.8466C15.6406 67.8883 15.3925 67.9545 15.1804 68.0455C14.9683 68.1364 14.8035 68.2595 14.6861 68.4148C14.5687 68.5663 14.5099 68.7557 14.5099 68.983C14.5099 69.3125 14.6293 69.5644 14.8679 69.7386C15.1103 69.9091 15.4171 69.9943 15.7884 69.9943ZM26.5298 62.7727V64.5909H21.2741V62.7727H26.5298ZM22.4673 60.6818H24.8878V68.8182C24.8878 69.0417 24.9219 69.2159 24.9901 69.3409C25.0582 69.4621 25.1529 69.5473 25.2741 69.5966C25.3991 69.6458 25.5431 69.6705 25.706 69.6705C25.8196 69.6705 25.9332 69.661 26.0469 69.642C26.1605 69.6193 26.2476 69.6023 26.3082 69.5909L26.6889 71.392C26.5677 71.4299 26.3973 71.4735 26.1776 71.5227C25.9579 71.5758 25.6908 71.608 25.3764 71.6193C24.7931 71.642 24.2817 71.5644 23.8423 71.3864C23.4067 71.2083 23.0677 70.9318 22.8253 70.5568C22.5829 70.1818 22.4635 69.7083 22.4673 69.1364V60.6818ZM30.5952 71.6648C30.0384 71.6648 29.5421 71.5682 29.1065 71.375C28.6709 71.178 28.3262 70.8883 28.0724 70.5057C27.8224 70.1193 27.6974 69.6383 27.6974 69.0625C27.6974 68.5777 27.7865 68.1705 27.9645 67.8409C28.1425 67.5114 28.3849 67.2462 28.6918 67.0455C28.9986 66.8447 29.3471 66.6932 29.7372 66.5909C30.1312 66.4886 30.544 66.4167 30.9759 66.375C31.4834 66.322 31.8925 66.2727 32.2031 66.2273C32.5137 66.178 32.7391 66.1061 32.8793 66.0114C33.0194 65.9167 33.0895 65.7765 33.0895 65.5909V65.5568C33.0895 65.197 32.9759 64.9186 32.7486 64.7216C32.5251 64.5246 32.2069 64.4261 31.794 64.4261C31.3584 64.4261 31.0118 64.5227 30.7543 64.7159C30.4967 64.9053 30.3262 65.1439 30.2429 65.4318L28.0043 65.25C28.1179 64.7197 28.3414 64.2614 28.6747 63.875C29.008 63.4848 29.438 63.1856 29.9645 62.9773C30.4948 62.7652 31.1084 62.6591 31.8054 62.6591C32.2902 62.6591 32.7543 62.7159 33.1974 62.8295C33.6444 62.9432 34.0402 63.1193 34.3849 63.358C34.7334 63.5966 35.008 63.9034 35.2088 64.2784C35.4096 64.6496 35.5099 65.0947 35.5099 65.6136V71.5H33.2145V70.2898H33.1463C33.0062 70.5625 32.8187 70.803 32.5838 71.0114C32.349 71.2159 32.0668 71.3769 31.7372 71.4943C31.4077 71.608 31.027 71.6648 30.5952 71.6648ZM31.2884 69.9943C31.6444 69.9943 31.9588 69.9242 32.2315 69.7841C32.5043 69.6402 32.7183 69.447 32.8736 69.2045C33.0289 68.9621 33.1065 68.6875 33.1065 68.3807V67.4545C33.0308 67.5038 32.9266 67.5492 32.794 67.5909C32.6652 67.6288 32.5194 67.6648 32.3565 67.6989C32.1937 67.7292 32.0308 67.7576 31.8679 67.7841C31.705 67.8068 31.5573 67.8277 31.4247 67.8466C31.1406 67.8883 30.8925 67.9545 30.6804 68.0455C30.4683 68.1364 30.3035 68.2595 30.1861 68.4148C30.0687 68.5663 30.0099 68.7557 30.0099 68.983C30.0099 69.3125 30.1293 69.5644 30.3679 69.7386C30.6103 69.9091 30.9171 69.9943 31.2884 69.9943ZM37.4332 59.8636H40.4673L43.6719 67.6818H43.8082L47.0128 59.8636H50.0469V71.5H47.6605V63.9261H47.5639L44.5526 71.4432H42.9276L39.9162 63.8977H39.8196V71.5H37.4332V59.8636ZM54.517 71.6648C53.9602 71.6648 53.464 71.5682 53.0284 71.375C52.5928 71.178 52.2481 70.8883 51.9943 70.5057C51.7443 70.1193 51.6193 69.6383 51.6193 69.0625C51.6193 68.5777 51.7083 68.1705 51.8864 67.8409C52.0644 67.5114 52.3068 67.2462 52.6136 67.0455C52.9205 66.8447 53.2689 66.6932 53.6591 66.5909C54.053 66.4886 54.4659 66.4167 54.8977 66.375C55.4053 66.322 55.8144 66.2727 56.125 66.2273C56.4356 66.178 56.661 66.1061 56.8011 66.0114C56.9413 65.9167 57.0114 65.7765 57.0114 65.5909V65.5568C57.0114 65.197 56.8977 64.9186 56.6705 64.7216C56.447 64.5246 56.1288 64.4261 55.7159 64.4261C55.2803 64.4261 54.9337 64.5227 54.6761 64.7159C54.4186 64.9053 54.2481 65.1439 54.1648 65.4318L51.9261 65.25C52.0398 64.7197 52.2633 64.2614 52.5966 63.875C52.9299 63.4848 53.3598 63.1856 53.8864 62.9773C54.4167 62.7652 55.0303 62.6591 55.7273 62.6591C56.2121 62.6591 56.6761 62.7159 57.1193 62.8295C57.5663 62.9432 57.9621 63.1193 58.3068 63.358C58.6553 63.5966 58.9299 63.9034 59.1307 64.2784C59.3314 64.6496 59.4318 65.0947 59.4318 65.6136V71.5H57.1364V70.2898H57.0682C56.928 70.5625 56.7405 70.803 56.5057 71.0114C56.2708 71.2159 55.9886 71.3769 55.6591 71.4943C55.3295 71.608 54.9489 71.6648 54.517 71.6648ZM55.2102 69.9943C55.5663 69.9943 55.8807 69.9242 56.1534 69.7841C56.4261 69.6402 56.6402 69.447 56.7955 69.2045C56.9508 68.9621 57.0284 68.6875 57.0284 68.3807V67.4545C56.9527 67.5038 56.8485 67.5492 56.7159 67.5909C56.5871 67.6288 56.4413 67.6648 56.2784 67.6989C56.1155 67.7292 55.9527 67.7576 55.7898 67.7841C55.6269 67.8068 55.4792 67.8277 55.3466 67.8466C55.0625 67.8883 54.8144 67.9545 54.6023 68.0455C54.3902 68.1364 54.2254 68.2595 54.108 68.4148C53.9905 68.5663 53.9318 68.7557 53.9318 68.983C53.9318 69.3125 54.0511 69.5644 54.2898 69.7386C54.5322 69.9091 54.839 69.9943 55.2102 69.9943ZM63.3324 62.7727L64.9347 65.8239L66.5767 62.7727H69.0597L66.5312 67.1364L69.1278 71.5H66.6562L64.9347 68.483L63.2415 71.5H60.7415L63.3324 67.1364L60.8324 62.7727H63.3324Z" fill="#111111"/>
                    <defs>
                    <clipPath id="clip0_814_37">
                    <rect width="21.0909" height="24" fill="white" transform="translate(24.4545 12.5)"/>
                    </clipPath>
                    </defs>
                </svg>
            </div>

            <TabMenu tabs={tabs}/>

            <div className='hidden-element-support w-full h-[132px] flex items-center justify-center bg-slate-300 opacity-0 '>aa</div>
        </nav>
    )
    // console.log(selected)
}

export default Navbar;