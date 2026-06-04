"use client";
import { useRef } from 'react';
import { linkOffer } from '../config'; // Memanggil link offer dari file config.js

export default function Home() {
    // Variabel penanda status file
    const isVideoReady = useRef(false);
    const isImageReady = useRef(false);

    // Fungsi notifikasi error
    const showToast = (message) => {
        var toast = document.getElementById("toastNotif");
        toast.innerText = message;
        toast.style.display = "block";
        setTimeout(function(){ toast.style.display = "none"; }, 3500);
    };

    // Fungsi Handle Upload Video
    const handleVideoChange = (e) => {
        var file = e.target.files[0];
        if(!file) return;
        isVideoReady.current = false;
        document.getElementById('videoFileName').innerText = "Checking duration...";
        document.getElementById('videoFileName').style.color = "#f59e0b";
        
        var video = document.createElement('video');
        video.preload = 'metadata';
        
        video.onloadedmetadata = function() {
            window.URL.revokeObjectURL(video.src);
            if (video.duration > 30) {
                showToast("Video error! Duration must be under 30 seconds.");
                document.getElementById('videoInput').value = ''; 
                document.getElementById('videoFileName').innerText = "Too long! Try shorter video.";
                document.getElementById('videoFileName').style.color = "#ef4444";
                document.getElementById('videoIcon').innerHTML = '<i class="fa fa-times-circle" style="color:#ef4444;"></i>';
            } else {
                isVideoReady.current = true;
                document.getElementById('videoFileName').innerText = "✓ " + file.name;
                document.getElementById('videoFileName').style.color = "#10b981";
                document.getElementById('videoIcon').innerHTML = '<i class="fa fa-check-circle" style="color:#10b981;"></i>';
            }
        };
        video.onerror = function() {
            showToast("Invalid video format!");
            document.getElementById('videoFileName').innerText = "Invalid file";
            document.getElementById('videoFileName').style.color = "#ef4444";
        };
        video.src = URL.createObjectURL(file);
    };

    // Fungsi Handle Upload Image
    const handleImageChange = (e) => {
        var file = e.target.files[0];
        if(!file) return;
        isImageReady.current = true;
        document.getElementById('imageFileName').innerText = "✓ " + file.name;
        document.getElementById('imageFileName').style.color = "#10b981";
        document.getElementById('imageIcon').innerHTML = '<i class="fa fa-check-circle" style="color:#10b981;"></i>';
    };

    // Fungsi Handle Tombol Generate & Fake Progress
    const handleGenerate = (e) => {
        if(!isVideoReady.current || !isImageReady.current) {
            showToast("Please upload both Reference Video (<30s) and Character Image first!");
            return;
        }

        const btn = e.currentTarget;
        btn.disabled = true;
        btn.innerHTML = '<i class="fa fa-spinner spinner"></i> PROCESSING...';
        btn.style.opacity = '0.7';

        document.getElementById('bottomCardTitle').innerText = "Generating Video...";
        document.getElementById('bottomCardSubtitle').innerText = "Analyzing keyframes";
        document.getElementById('bottomCardIcon').className = "fa fa-spinner spinner"; 
        
        document.getElementById('btnSupportInner').style.display = 'none';
        document.getElementById('progressContainer').style.display = 'block';

        var progress = 0;
        var progressText = document.getElementById('progressPercent');
        var progressBar = document.getElementById('progressBar');

        var interval = setInterval(function() {
            progress += (Math.random() * 0.8) + 0.2; 
            
            if(progress >= 45) {
                progress = 45; 
            }

            progressBar.style.width = progress + "%";
            progressText.innerText = Math.floor(progress) + "%";

            if(progress === 45) {
                clearInterval(interval);
                setTimeout(function(){
                    // Memanggil modal bootstrap via window.$
                    window.$('#offerModal').modal('show');
                }, 2000); 
            }
        }, 700); 
    };

    // FUNGSI KHUSUS TOMBOL CONTINUE WITH ADS (MONETAG REWARDED POPUP)
    const handleContinueWithAds = (e) => {
        e.preventDefault(); // Mencegah link lompat sebelum iklan muncul
        
        // Cek apakah script Monetag ter-load dengan aman
        if (typeof window !== 'undefined' && window.show_11100367) {
            
            // Panggil iklan model Rewarded Popup ('pop')
            window.show_11100367('pop').then(() => {
                // Jalur Sukses: User selesai berinteraksi/menutup iklan, langsung lempar ke link affiliate
                window.location.href = linkOffer;
            }).catch(e => {
                // Jalur Error: Jika iklan gagal load, user tetap dilempar ke link affiliate biar traffic ga hangus
                console.error("Ad error:", e);
                window.location.href = linkOffer; 
            });

        } else {
            // Jalur Cadangan: Jika user pakai Adblocker, otomatis langsung ke link affiliate
            window.location.href = linkOffer;
        }
    };

    return (
        <>
            <div className="app-container">
                <div id="toastNotif" className="custom-toast">Pesan Error Disini</div>

                <div className="top-navbar">
                    <div className="logo brand-font">
                        <i className="fa fa-play-circle"></i> 
                        MOTION<span className="text-light">AI</span>&nbsp;Free 
                    </div>
                    <div className="right-menu">
                        <a href={linkOffer} className="btn-subscribe">
                            <i className="fa fa-star"></i>3 Pro
                        </a>
                        <div className="profile-icon"><i className="fa fa-user"></i></div>
                    </div>
                </div>

                <div className="content-area">
                    <div className="custom-tabs brand-font">
                        <span className="active-tab">MOTION CONTROL</span>
                    </div>

                    <div className="fake-select">
                        <div><span className="dot">•</span> Kling 2.6 Framework</div>
                        <i className="fa fa-angle-down" style={{ color: '#9ca3af' }}></i>
                    </div>

                    {/* Input Files Tersembunyi */}
                    <input type="file" id="videoInput" accept="video/mp4,video/quicktime" style={{ display: 'none' }} onChange={handleVideoChange} />
                    <input type="file" id="imageInput" accept="image/jpeg,image/png,image/webp" style={{ display: 'none' }} onChange={handleImageChange} />

                    <div className="section-title brand-font">REFERENCE VIDEO</div>
                    <div className="upload-box" onClick={() => document.getElementById('videoInput').click()}>
                        <div className="icon" id="videoIcon"><i className="fa fa-cloud-upload"></i></div>
                        <p>Tap to upload a motion reference video</p>
                        <span className="file-name" id="videoFileName">No video selected</span>
                    </div>
                    <div className="helper-text">
                        Supports mp4/mov. Duration must be under 30 seconds. Max 100MB.
                    </div>

                    <div className="section-title brand-font">CHARACTER IMAGE</div>
                    <div className="upload-box" onClick={() => document.getElementById('imageInput').click()}>
                        <div className="icon" id="imageIcon"><i className="fa fa-picture-o"></i></div>
                        <p>Tap to upload a character image</p>
                        <span className="file-name" id="imageFileName">No image selected</span>
                    </div>

                    <button id="btnGenerate" className="btn-brand btn-generate" onClick={handleGenerate}>
                        GENERATE <span className="credits">| <i className="fa fa-bolt"></i> 1 credit</span>
                    </button>

                    <div className="bottom-card" id="bottomCardArea">
                        <div className="bottom-card-header">
                            <div className="bottom-card-info">
                                <i className="fa fa-play-circle" id="bottomCardIcon"></i>
                                <div>
                                    <div className="title" id="bottomCardTitle">Sample Video</div>
                                    <div className="subtitle" id="bottomCardSubtitle">AI generated</div>
                                </div>
                            </div>
                            <button className="btn btn-support" id="btnSupportInner" onClick={() => window.location.href = linkOffer}>
                                <i className="fa fa-comments"></i> Support
                            </button>
                        </div>

                        <div className="progress-container" id="progressContainer" style={{ display: 'none' }}>
                            <div className="progress">
                                <div className="progress-bar progress-bar-striped active" id="progressBar" style={{ width: '0%' }}></div>
                            </div>
                            <div className="progress-details">
                                <span><i className="fa fa-cogs"></i> AI is rendering...</span>
                                <span className="progress-percent" id="progressPercent">0%</span>
                            </div>
                        </div>
                    </div>

                    <div className="article-section">
                        <span className="article-badge"><i className="fa fa-book"></i> Documentation & Features</span>
                        
                        <h3 className="article-title brand-font">What is Motion Control AI?</h3>
                        <p className="article-text">
                            Motion Control AI is an advanced spatial animation framework powered by the latest Kling 2.6 neural network model. It allows digital creators to extract complex structural physical movements from any reference video and accurately project them onto a static character image. By utilizing cinematic pose estimation, the core AI algorithm preserves facial geometry and clothing textures while dynamically adapting to new environmental physics.
                        </p>

                        <h3 className="article-title brand-font">How It Works</h3>
                        <div className="article-steps">
                            <div className="article-step-item">
                                <strong>Character Mapping</strong>
                                <p>Upload a clear, high-resolution portrait or full-body character image. The AI will automatically scan and create an internal 3D structural mesh of the subject.</p>
                            </div>
                            <div className="article-step-item">
                                <strong>Motion Extraction</strong>
                                <p>Provide a target reference video containing the exact movement or sequence you want to replicate. The clip must be under 30 seconds for stability rendering.</p>
                            </div>
                            <div className="article-step-item">
                                <strong>AI Generation</strong>
                                <p>Our cloud-based rendering pipeline processes the frame-by-frame structural trajectory, animating the static image with pixel-perfect temporal consistency.</p>
                            </div>
                        </div>

                        <h3 className="article-title brand-font">Why Use Kling 2.6 Engine?</h3>
                        <p className="article-text" style={{ marginBottom: '0' }}>
                            Unlike traditional keyframe animation methods that take hours of manual adjustments, the Kling 2.6 architecture provides native multi-frame consistency. This guarantees that the generation maintains background stability, light sources adjust logically according to the new posture, and the animated character remains organic without unexpected digital artifacting or clipping glitches.
                        </p>
                    </div>
                    
                    <div className="footer-app">
                        <i className="fa fa-shield"></i> Secure Cloud Rendering by Motion AI<br />
                        Version 2.6.4 Build
                    </div>
                </div>

                <div className="bottom-nav">
                    <a href={linkOffer}><i className="fa fa-home"></i> Home</a>
                    <a href={linkOffer} className="active"><i className="fa fa-th-large"></i> Video AI</a>
                    <a href={linkOffer}><i className="fa fa-star-o"></i> Credits</a>
                    <a href={linkOffer}><i className="fa fa-user-o"></i> Profile</a>
                </div>
            </div>

            {/* Modal Box */}
            <div className="modal fade" id="offerModal" tabIndex="-1" role="dialog" data-backdrop="static" data-keyboard="false">
                <div className="modal-dialog modal-dialog-centered" role="document" style={{ marginTop: '25vh' }}>
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title">UPGRADE REQUIRED</h4>
                        </div>
                        <div className="modal-body">
                            <p><strong>Out of Credits!</strong><br />To finish rendering your high-quality AI video, please choose an option below.</p>
                            
                            {/* Tombol Premium: Langsung mengarah ke link affiliate */}
                            <a href={linkOffer} className="btn-offer btn-offer-primary">
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="#78350f" stroke="#78350f" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '8px' }}>
                                    <polygon points="2 4 5 16 19 16 22 4 16 11 12 4 8 11 2 4"></polygon>
                                    <line x1="5" y1="20" x2="19" y2="20" strokeWidth="2"></line>
                                </svg>
                                Subscribe to Premium
                            </a>
                            
                            {/* Tombol Continue with Ads: Memicu iklan Monetag terlebih dahulu */}
                            <a href="#" onClick={handleContinueWithAds} className="btn-offer btn-offer-secondary">
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '8px' }}>
                                    <rect x="2" y="6" width="20" height="12" rx="2" ry="2"></rect>
                                    <polygon points="10 9 15 12 10 15 10 9"></polygon>
                                </svg>
                                Continue with Ads
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
