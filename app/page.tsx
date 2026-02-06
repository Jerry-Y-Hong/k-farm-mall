'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Wheat, Leaf, FlaskConical, ShoppingBag, ArrowRight, Milk, X, CheckCircle } from 'lucide-react'

const PRODUCTS = [
    {
        id: 1,
        name: '철원 오대쌀 프리미엄',
        category: '농산물',
        description: '대한민국 대표 쌀, 맑은 물과 공기에서 자란 햅쌀의 풍미.',
        details: {
            origin: '강원특별자치도 철원군',
            weight: '10kg / 20kg',
            storage: '직사광선을 피하고 서늘한 곳에 보관',
            feature: '단백질 함량이 낮고 점성이 강해 밥맛이 우수함'
        },
        tag: 'BEST',
        image: '/images/rice.png',
        cert: '제 2024-CW-001호 [정밀 검사 완료]',
        link: 'https://smartstore.naver.com/kfarmgroup' // 예시 링크
    },
    {
        id: 2,
        name: '청정 철원 고추냉이',
        category: '농산물',
        description: '물속에서 자라는 정통 방식, 알싸함이 살아있는 명품 와사비.',
        details: {
            origin: '강원특별자치도 철원군',
            weight: '100g / 200g (생물)',
            storage: '냉장 보관 (0~5도)',
            feature: '철원 현무암 지대의 깨끗한 용천수로 재배'
        },
        tag: 'NEW',
        image: '/images/wasabi.png',
        cert: '제 2024-CW-002호 [잔류농약 불검출]',
        link: 'https://smartstore.naver.com/kfarmgroup'
    },
    {
        id: 3,
        name: '명품 와사비 김치',
        category: '가공식품',
        description: '철원 고추냉이의 알싸한 풍미가 담긴 프리미엄 수제 김치.',
        details: {
            origin: '국내산(철원 오대쌀, 고추냉이 활용)',
            weight: '1kg / 3kg',
            storage: '냉장 보관',
            feature: '인공 감미료 없이 고추냉이 잎과 줄기로 맛을 냄'
        },
        tag: 'HOT',
        image: '/images/wasabi_kimchi.png',
        cert: '제 2024-CW-007호 [전통식품 인증]',
        link: 'https://smartstore.naver.com/kfarmgroup'
    },
    {
        id: 4,
        name: '고당도 파프리카 세트',
        category: '농산물',
        description: '아삭한 식감과 비타민이 풍부한 철원산 프리미엄 파프리카.',
        details: {
            origin: '강원특별자치도 철원군',
            weight: '2kg / 3kg (혼합 구성)',
            storage: '냉장 보관',
            feature: '스마트팜 통합 제어로 균일한 당도 유지'
        },
        tag: 'FRESH',
        image: '/images/paprika.png',
        cert: '제 2024-CW-003호 [GAP 인증 완료]',
        link: 'https://smartstore.naver.com/kfarmgroup'
    },
    {
        id: 5,
        name: '철원 프리미엄 누룽지',
        category: '가공식품',
        description: '오대쌀 100%, 가마솥 방식으로 구워낸 구수하고 바삭한 맛.',
        details: {
            origin: '강원특별자치도 철원군 (철원 오대쌀)',
            weight: '500g / 1kg',
            storage: '실온 보관',
            feature: '다른 첨가물 없이 순수 오대쌀로만 제조'
        },
        tag: 'BEST',
        image: '/images/nurungji.png',
        cert: '제 2024-CW-004호 [HACCP 인증]',
        link: 'https://smartstore.naver.com/kfarmgroup'
    },
    {
        id: 6,
        name: '전통 쌀 막걸리',
        category: '가공식품',
        description: '철원 오대쌀로 빚어 깊고 부드러운 전통 발효주.',
        details: {
            origin: '강원특별자치도 철원군 (철원 오대쌀)',
            weight: '750ml x 3병 세트',
            storage: '냉장 보관',
            feature: '전통 누룩 방식을 고수하여 풍미가 깊음'
        },
        tag: 'BEST',
        image: '/images/makgeolli.png',
        cert: '제 2024-CW-005호 [전통주 품질인증]',
        link: 'https://smartstore.naver.com/kfarmgroup'
    },
    {
        id: 7,
        name: '수제 요거트 키트',
        category: '가공식품',
        description: '청정 축산물로 만든 신선하고 건강한 아침 대용 요거트.',
        details: {
            origin: '강원특별자치도 철원군 (무항생제 원유)',
            weight: '150ml x 5팩',
            storage: '냉장 보관',
            feature: '과도한 당분 없이 원유 본연의 고소한 맛'
        },
        tag: 'PREMIUM',
        image: '/images/yogurt.png',
        cert: '제 2024-CW-006호 [무항생제 인증]',
        link: 'https://smartstore.naver.com/kfarmgroup'
    },
]

export default function HomePage() {
    const [selectedCert, setSelectedCert] = useState<null | { name: string; cert: string }>(null)
    const [selectedProduct, setSelectedProduct] = useState<null | typeof PRODUCTS[0]>(null)
    const [showPolicy, setShowPolicy] = useState<null | 'terms' | 'privacy' | 'delivery'>(null)

    return (
        <main>
            {/* Hero Section */}
            <section className="hero">
                <div className="hero-content animate-fade-in-up">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                    >
                        <p className="hero-subtitle">Premium Agriculture from Cheorwon-gun</p>
                        <h1 className="hero-title">철원의 자연을<br />식탁에 올리다</h1>
                        <p className="hero-subtitle">철원 농업법인이 직접 재배하고 엄선한<br />최상급 특산물과 가공식품을 만나보세요.</p>
                        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
                            <a href="#products" className="btn-primary">상품 둘러보기</a>
                            <a href="#brand-story" className="btn-outline" style={{ border: '2px solid white', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none' }}>농업법인 이야기</a>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Featured Products */}
            <section id="products" className="premium-container mb-20">
                <div className="section-title">
                    <span>Our Specialty</span>
                    <h2>철원 명품 특산물</h2>
                    <p style={{ color: '#666', marginTop: '10px' }}>네이버 스마트스토어 입점 상품 | 철원군 농업법인 공식 인증</p>
                </div>

                <div className="grid">
                    {PRODUCTS.map((product) => (
                        <motion.div
                            key={product.id}
                            className="product-card"
                            whileHover={{ y: -10 }}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: product.id * 0.1 }}
                        >
                            <div className="product-image" style={{ height: '320px', overflow: 'hidden', position: 'relative' }}>
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                />
                                <div style={{ position: 'absolute', top: '15px', right: '15px', zIndex: 10 }}>
                                    <button
                                        onClick={() => setSelectedCert({ name: product.name, cert: product.cert })}
                                        style={{
                                            backgroundColor: 'white',
                                            border: '1px solid var(--primary)',
                                            borderRadius: '30px',
                                            padding: '6px 14px',
                                            cursor: 'pointer',
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '6px',
                                            boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                                            transition: 'transform 0.2s'
                                        }}
                                        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                                        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                                        title="검사 성적서 보기"
                                    >
                                        <CheckCircle size={16} color="#2E7D32" />
                                        <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--primary)' }}>품질 인증</span>
                                    </button>
                                </div>
                            </div>
                            <div className="product-info">
                                <span className="product-tag">{product.tag}</span>
                                <h3 className="product-name">{product.name}</h3>
                                <p className="product-desc">{product.description}</p>

                                <div style={{ margin: '15px 0', fontSize: '0.85rem', color: '#666' }}>
                                    <p>🛡️ 원산지: {product.details.origin}</p>
                                    <p>📦 단위/중량: {product.details.weight}</p>
                                </div>

                                <div style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
                                    <button
                                        onClick={() => setSelectedProduct(product)}
                                        className="btn-outline"
                                        style={{ flex: 1, padding: '10px', fontSize: '0.85rem', border: '1px solid var(--primary)', borderRadius: '8px', cursor: 'pointer' }}
                                    >
                                        상세 정보
                                    </button>
                                    <a
                                        href={product.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn-primary"
                                        style={{ flex: 1.5, padding: '10px', fontSize: '0.85rem', textAlign: 'center', textDecoration: 'none', borderRadius: '8px' }}
                                    >
                                        구매하기
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Modal for Product Details */}
            <AnimatePresence>
                {selectedProduct && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.8)', zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}
                        onClick={() => setSelectedProduct(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.8, y: 20 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.8, y: 20 }}
                            style={{ backgroundColor: 'white', padding: '40px', borderRadius: '24px', maxWidth: '600px', width: '100%', position: 'relative', maxHeight: '90vh', overflowY: 'auto' }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                style={{ position: 'absolute', top: '20px', right: '20px', background: 'none', border: 'none', cursor: 'pointer' }}
                                onClick={() => setSelectedProduct(null)}
                            >
                                <X size={24} />
                            </button>
                            <div style={{ display: 'flex', gap: '30px', flexWrap: 'wrap' }}>
                                <div style={{ flex: '1', minWidth: '200px' }}>
                                    <img src={selectedProduct.image} alt={selectedProduct.name} style={{ width: '100%', borderRadius: '16px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }} />
                                </div>
                                <div style={{ flex: '1.2', minWidth: '250px' }}>
                                    <span className="product-tag">{selectedProduct.tag}</span>
                                    <h2 style={{ fontSize: '1.8rem', margin: '10px 0' }}>{selectedProduct.name}</h2>
                                    <p style={{ color: '#666', marginBottom: '20px', lineHeight: '1.6' }}>{selectedProduct.description}</p>

                                    <div style={{ padding: '20px', backgroundColor: '#f9f9f9', borderRadius: '12px', fontSize: '0.95rem' }}>
                                        <p style={{ margin: '8px 0' }}><strong>📍 원산지:</strong> {selectedProduct.details.origin}</p>
                                        <p style={{ margin: '8px 0' }}><strong>⚖️ 중량:</strong> {selectedProduct.details.weight}</p>
                                        <p style={{ margin: '8px 0' }}><strong>🌡️ 보관법:</strong> {selectedProduct.details.storage}</p>
                                        <p style={{ margin: '8px 0' }}><strong>✨ 특장점:</strong> {selectedProduct.details.feature}</p>
                                    </div>

                                    <div style={{ marginTop: '30px', display: 'flex', gap: '15px' }}>
                                        <a href={selectedProduct.link} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ flex: 1, textAlign: 'center', textDecoration: 'none' }}>
                                            네이버 스마트스토어에서 구매
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Modal for Certificate */}
            <AnimatePresence>
                {selectedCert && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.8)', zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}
                        onClick={() => setSelectedCert(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.8, y: 20 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.8, y: 20 }}
                            style={{ backgroundColor: 'white', padding: '40px', borderRadius: '24px', maxWidth: '500px', width: '100%', position: 'relative' }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                style={{ position: 'absolute', top: '20px', right: '20px', background: 'none', border: 'none', cursor: 'pointer' }}
                                onClick={() => setSelectedCert(null)}
                            >
                                <X size={24} />
                            </button>
                            <div style={{ textAlign: 'center' }}>
                                <div style={{ marginBottom: '20px', color: 'var(--primary)' }}>
                                    <CheckCircle size={48} style={{ margin: '0 auto' }} />
                                </div>
                                <h2 style={{ marginBottom: '10px' }}>품목 검사 완료</h2>
                                <p style={{ color: '#666', marginBottom: '30px' }}>{selectedCert.name}의 품질과 안전성을 보증합니다.</p>
                                <div style={{ backgroundColor: '#f9f9f9', padding: '20px', borderRadius: '12px', textAlign: 'left', border: '1px dashed #ccc' }}>
                                    <p style={{ fontSize: '0.9rem', color: '#888', marginBottom: '8px' }}>검사 번호</p>
                                    <p style={{ fontWeight: 700, fontSize: '1.1rem' }}>{selectedCert.cert}</p>
                                    <hr style={{ margin: '15px 0', border: 'none', borderTop: '1px solid #eee' }} />
                                    <p style={{ fontSize: '0.8rem', color: '#666' }}>본 농산물은 철원군 농업기술센터 및 공인 기관의 정밀 검사를 통과하였으며, 철원 농업법인이 품질을 직접 보증합니다.</p>
                                </div>
                                <button className="btn-primary" style={{ width: '100%', marginTop: '30px' }} onClick={() => setSelectedCert(null)}>확인</button>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Brand Story Section */}
            <section id="brand-story" style={{ padding: '120px 0', backgroundColor: '#fdfdfd' }}>
                <div className="premium-container">
                    <div className="section-title">
                        <span>The Vision of K-Farm Group</span>
                        <h2>미래 농업의 기준을 세우다</h2>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '100px' }}>
                        {/* Story 1 */}
                        <div style={{ display: 'flex', alignItems: 'center', gap: '80px', flexWrap: 'wrap' }}>
                            <div style={{ flex: '1', minWidth: '320px' }}>
                                <motion.div
                                    initial={{ opacity: 0, x: -30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                >
                                    <span style={{ color: 'var(--accent)', fontWeight: 700, fontSize: '0.9rem', letterSpacing: '2px' }}>01. CLIMATE RESILIENCE</span>
                                    <h3 style={{ fontSize: '2.5rem', margin: '16px 0 24px' }}>기후 변화에 맞서는<br />우리의 정답</h3>
                                    <p style={{ color: '#666', fontSize: '1.1rem', lineHeight: '1.8' }}>
                                        변화하는 기후는 더 이상 자연만의 문제가 아닙니다. 케이팜그룹은 전통적인 노지 재배의 한계를 넘어, 어떠한 환경에서도 일정한 품질을 보장하는 스마트팜 솔루션으로 먹거리의 미래를 지킵니다.
                                    </p>
                                </motion.div>
                            </div>
                            <div style={{ flex: '1.2', minWidth: '320px', borderRadius: '40px', overflow: 'hidden', boxShadow: '0 20px 60px rgba(0,0,0,0.1)' }}>
                                <img src="https://images.unsplash.com/photo-1592419044706-39796d40f98c?auto=format&fit=crop&q=80&w=1000" alt="Climate Resilience" style={{ width: '100%', height: '450px', objectFit: 'cover' }} />
                            </div>
                        </div>

                        {/* Story 2 */}
                        <div style={{ display: 'flex', alignItems: 'center', gap: '80px', flexWrap: 'wrap-reverse' }}>
                            <div style={{ flex: '1.2', minWidth: '320px', borderRadius: '40px', overflow: 'hidden', boxShadow: '0 20px 60px rgba(0,0,0,0.1)' }}>
                                <img src="/images/smart_innovation.png" alt="Smart Innovation" style={{ width: '100%', height: '450px', objectFit: 'cover' }} />
                            </div>
                            <div style={{ flex: '1', minWidth: '320px' }}>
                                <motion.div
                                    initial={{ opacity: 0, x: 30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                >
                                    <span style={{ color: 'var(--accent)', fontWeight: 700, fontSize: '0.9rem', letterSpacing: '2px' }}>02. SMART INNOVATION</span>
                                    <h3 style={{ fontSize: '2.5rem', margin: '16px 0 24px' }}>종묘부터 제어까지,<br />완전한 데이터 농업</h3>
                                    <p style={{ color: '#666', fontSize: '1.1rem', lineHeight: '1.8' }}>
                                        우리는 단순히 시설을 짓는 것에 그치지 않습니다. 우수한 종묘의 배양부터 실시간 환경 통합 제어까지, 모든 생산 과정을 데이터화하여 농업의 전 과정에서 혁신적인 효율과 품질 향상을 이끌어냅니다.
                                    </p>
                                </motion.div>
                            </div>
                        </div>

                        {/* Story 3 */}
                        <div style={{ display: 'flex', alignItems: 'center', gap: '80px', flexWrap: 'wrap' }}>
                            <div style={{ flex: '1', minWidth: '320px' }}>
                                <motion.div
                                    initial={{ opacity: 0, x: -30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                >
                                    <span style={{ color: 'var(--accent)', fontWeight: 700, fontSize: '0.9rem', letterSpacing: '2px' }}>03. HIGH VALUE-ADDED</span>
                                    <h3 style={{ fontSize: '2.5rem', margin: '16px 0 24px' }}>자연의 가치에<br />과학의 맛을 더하다</h3>
                                    <p style={{ color: '#666', fontSize: '1.1rem', lineHeight: '1.8' }}>
                                        철원의 청정 자연이 선물한 원물에 첨단 가공 기술을 접목합니다. 와사비 김치, 프리미엄 누룽지 등 농업의 부가가치를 극대화한 가공식품 개발로 케이팜그룹은 건강한 식문화를 선도합니다.
                                    </p>
                                    <button className="btn-primary" style={{ marginTop: '32px' }}>혁신 성과 자세히 보기</button>
                                </motion.div>
                            </div>
                            <div style={{ flex: '1.2', minWidth: '320px', borderRadius: '40px', overflow: 'hidden', boxShadow: '0 20px 60px rgba(0,0,0,0.1)' }}>
                                <img src="/images/wasabi_kimchi.png" alt="High Value-Added" style={{ width: '100%', height: '450px', objectFit: 'cover' }} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Modal for Policy */}
            <AnimatePresence>
                {showPolicy && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.8)', zIndex: 1100, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}
                        onClick={() => setShowPolicy(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.8 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0.8 }}
                            style={{ backgroundColor: 'white', padding: '40px', borderRadius: '24px', maxWidth: '800px', width: '100%', maxHeight: '80vh', overflowY: 'auto', position: 'relative' }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button style={{ position: 'absolute', top: '20px', right: '20px', background: 'none', border: 'none', cursor: 'pointer' }} onClick={() => setShowPolicy(null)}><X size={24} /></button>
                            {showPolicy === 'terms' && (
                                <div>
                                    <h2>이용약관</h2>
                                    <div style={{ marginTop: '20px', lineHeight: '1.8', color: '#444' }}>
                                        <p><strong>제 1조 (목적)</strong><br />본 약관은 농업회사법인 케이팜그룹(이하 "회사")이 운영하는 공식 웹사이트에서 제공하는 서비스의 이용 조건 및 절차에 관한 사항을 규정함을 목적으로 합니다.</p>
                                        <p><strong>제 2조 (서비스의 내용)</strong><br />회사는 상품의 정보 제공, 외부 쇼핑몰 연동, 브랜드 스토리 공유 등의 서비스를 제공합니다. 실제 결제 및 배송은 연동된 외부 마켓플레이스(네이버 스마트스토어 등)의 정책을 따릅니다.</p>
                                        {/* 추가 내용 생략 가능 - 실제 운영 시 보강 필요 */}
                                    </div>
                                </div>
                            )}
                            {showPolicy === 'privacy' && (
                                <div>
                                    <h2>개인정보처리방침</h2>
                                    <div style={{ marginTop: '20px', lineHeight: '1.8', color: '#444' }}>
                                        <p>농업회사법인 케이팜그룹은 이용자의 개인정보를 중요시하며, "정보통신망 이용촉진 및 정보보호"에 관한 법률을 준수하고 있습니다.</p>
                                        <p><strong>1. 수집하는 개인정보 항목</strong><br />회사는 별도의 회원가입 없이 상품 정보를 제공하며, 문의하기 기능을 이용할 경우에 한해 이름, 연락처 등을 수집할 수 있습니다.</p>
                                    </div>
                                </div>
                            )}
                            {showPolicy === 'delivery' && (
                                <div>
                                    <h2>배송 및 환불 정책</h2>
                                    <div style={{ marginTop: '20px', lineHeight: '1.8', color: '#444' }}>
                                        <p><strong>1. 배송 안내</strong><br />신선 식품의 특성상 산지 직송을 원칙으로 하며, 주문 후 1~3일 이내에 출고됩니다. (철원 오대쌀 등 일부 품목 제외)</p>
                                        <p><strong>2. 교환 및 반품</strong><br />신선 농산물은 제품 하자 발생 시 수령 직후 사진 촬영 후 고객센터로 연락 주시면 즉시 처리를 도와드립니다. 단순 변심에 의한 반품은 상품 가치 하락으로 인해 대단히 어렵습니다.</p>
                                    </div>
                                </div>
                            )}
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Footer */}
            <footer style={{ backgroundColor: 'var(--primary)', color: 'white', padding: '60px 0' }}>
                <div className="premium-container text-center">
                    <h2 style={{ color: 'var(--secondary)', marginBottom: '16px' }}>농업회사법인 주식회사 케이팜그룹</h2>
                    <div style={{ opacity: 0.8, lineHeight: '1.8', marginBottom: '32px' }}>
                        <p>대표이사: 함석도 | 사업자등록번호: 888-88-03763</p>
                        <p>통신판매업 신고번호: 준비중 (등록 후 업데이트 예정)</p>
                        <p>주소: 강원특별자치도 철원군 근남면 초막동길 2-1</p>
                        <p>업태: 농업, 도소매 | 종목: 스마트팜, 전자상거래</p>
                    </div>
                    <div style={{ display: 'flex', gap: '24px', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <button onClick={() => setShowPolicy('terms')} style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer', textDecoration: 'underline' }}>이용약관</button>
                        <button onClick={() => setShowPolicy('privacy')} style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer', textDecoration: 'underline' }}>개인정보처리방침</button>
                        <button onClick={() => setShowPolicy('delivery')} style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer', textDecoration: 'underline' }}>배송/환불정책</button>
                        <a href="https://www.ftc.go.kr/www/bizCommList.do?key=232" target="_blank" rel="noopener noreferrer" style={{ color: 'white' }}>사업자정보확인</a>
                    </div>
                    <p style={{ marginTop: '40px', fontSize: '0.8rem', opacity: 0.5 }}>© 2026 농업회사법인 주식회사 케이팜그룹. All rights reserved.</p>
                </div>
            </footer>
        </main>
    )
}
