interface BottomLinksProps {
  onCreateAccount: () => void;
}

export default function BottomLinks({ onCreateAccount }: BottomLinksProps) {
  const brandColor = '#0b76bd';

  return (
    <div className="mt-8 space-y-4">
      <div className="text-center">
        <a
          href="/contact"
          className="text-sm transition-colors duration-200"
          style={{ color: brandColor }}
          onMouseEnter={(e) => e.currentTarget.style.color = '#095a94'}
          onMouseLeave={(e) => e.currentTarget.style.color = brandColor}
        >
          認証に問題があります
        </a>
      </div>

      <div className="rounded-lg p-4 text-left border-2" style={{ backgroundColor: '#f0f8ff', borderColor: '#b3d9f2' }}>
        <p className="text-xs leading-relaxed" style={{ color: brandColor }}>
          <strong className="font-bold">⚠️ 重要なお知らせ</strong><br />
          当サービスは情報提供のみを目的としており、投資助言や投資勧誘を行うものではありません。
          <strong className="font-semibold">投資判断は必ずご自身の責任で行ってください。</strong>
          株式投資には価格変動リスクがあり、投資元本を割り込む可能性があります。
        </p>
      </div>
    </div>
  );
}
