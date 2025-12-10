import { ProductItem } from "@/components/Contents/Product";

const product: ProductItem[] = [
  {
    type: "Private Project",
    image: "",
    title: "POS (Point Of Sale)",
    description:
      "Sistem POS dirancang untuk membantu proses transaksi dan manajemen data secara efisien. Fitur utama mencakup pengelolaan produk, transaksi, laporan penjualan, dan autentikasi pengguna. Sistem dibangun dari tahap analisis kebutuhan hingga pengujian bersama guru dan pengguna akhir.",
    badgeTop: [{ text: "Fullstack", variant: "pink-to-orange", size: "medium" }],
    badgeBottom: [
      { text: "Laravel", border: "border-laravel", sizeContainer: "lg", size: "large" },
      { text: "Bootstrap", border: "border-bootstrap", sizeContainer: "lg", size: "large" },
      { text: "PostgreSQL", border: "border-postgresql", sizeContainer: "lg", size: "large" },
    ],
  },
  // {
  // type: '',
  //   image: "",
  //   title: "Single Page Application Sinergi",
  //   description: "",
  //   badgeTop: [{ text: "Frontend", variant: "green-to-cyan", size: "medium" }],
  //   badgeBottom: [
  //     { text: "Next JS", border: "border-nextjs", sizeContainer: "lg", size: "large" },
  //     { text: "Tailwind", border: "border-tailwind", sizeContainer: "lg", size: "large" },
  //   ],
  // },
  {
    type: "Public Project",
    image: "",
    title: "QCloud: Solusi Cloud Computing Fleksibel & Terjangkau",
    description: "QCloud adalah platform cloud fleksibel dan terjangkau yang dirancang untuk mendukung pertumbuhan bisnis Anda. Dapatkan akses instan ke server, storage, database, dan jaringan berkinerja tinggi hanya dalam hitungan detik.",
    badgeTop: [{ text: "Frontend", variant: "green-to-cyan", size: "medium" }],
    badgeBottom: [
      { text: "React", border: "border-react", sizeContainer: "lg", size: "large" },
      { text: "Tailwind", border: "border-tailwind", sizeContainer: "lg", size: "large" },
    ],
    href: "https://qcloud.id/",
  },
  {
    type: "Private Project",
    image: "",
    title: "MTL (Matrix Tindak Lanjut)",
    description:
      "Matrix Tindak Lanjut adalah sistem tindak lanjut yang digunakan untuk memonitor, mengelola, dan menyelesaikan setiap temuan atau tugas dalam organisasi. Sistem ini membantu meningkatkan transparansi dan memastikan setiap tindak lanjut terekam dengan jelas.",
    badgeTop: [
      { text: "Frontend", variant: "green-to-cyan", size: "medium" },
      { text: "Backend", variant: "pink-to-purple", size: "medium" },
    ],
    badgeBottom: [
      { text: "React", border: "border-react", sizeContainer: "lg", size: "large" },
      { text: "Laravel", border: "border-laravel", sizeContainer: "lg", size: "large" },
      { text: "Tailwind", border: "border-tailwind", sizeContainer: "lg", size: "large" },
      { text: "PostgreSQL", border: "border-postgresql", sizeContainer: "lg", size: "large" },
    ],
  },
  {
    type: "Private Project",
    image: "",
    title: "HSS (Health Safety Security)",
    description:
      "Health Safety Security adalah sistem yang dirancang untuk membantu organisasi mengelola aspek kesehatan, keselamatan, dan keamanan dalam satu platform terintegrasi. Sistem ini memfasilitasi proses pelaporan, penanganan insiden, pemantauan risiko, hingga dokumentasi compliance. Dengan adanya HSS, perusahaan dapat memastikan lingkungan kerja yang lebih aman, terkontrol, dan sesuai standar regulasi.",
    badgeTop: [
      { text: "Frontend", variant: "green-to-cyan", size: "medium" },
      { text: "Backend", variant: "pink-to-purple", size: "medium" },
    ],
    badgeBottom: [
      { text: "React", border: "border-react", sizeContainer: "lg", size: "large" },
      { text: "Laravel", border: "border-laravel", sizeContainer: "lg", size: "large" },
      { text: "Bootstrap", border: "border-bootstrap", sizeContainer: "lg", size: "large" },
      { text: "PostgreSQL", border: "border-postgresql", sizeContainer: "lg", size: "large" },
    ],
  },
];

export { product };
