"use client";

const reviewData = [
  { stars: 5, percent: 50 },
  { stars: 4, percent: 40 },
  { stars: 3, percent: 5 },
  { stars: 2, percent: 3 },
  { stars: 1, percent: 2 },
];


export default function ReviewSummary({ reviews }) {
  const totalReviews = reviews.length;

  const totalStars = reviews.reduce((sum, review) => sum + review.stars, 0);

  const averageRating = totalReviews > 0 
    ? (totalStars / totalReviews).toFixed(1) 
    : "0.0";

  // توزيع التقييمات: كم واحد إدّى 5، 4، إلخ
  const reviewData = [5, 4, 3, 2, 1].map((star) => {
    const count = reviews.filter((r) => r.stars === star).length;
    const percent = totalReviews ? (count / totalReviews) * 100 : 0;
    return {
      stars: star,
      percent: percent.toFixed(1),
    };
  });

  return (
    <div className="bg-gray-50 p-6 rounded-lg  w-full max-w-md">
    

      <div className="flex items-center space-x-4 mb-4">
        <div className="text-4xl font-bold">{averageRating}</div>
        <div>
          <div className="flex text-blue-500">
            {Array.from({ length: 5 }).map((_, i) => (
              <svg
                key={i}
                className={`w-5 h-5 ${
                  i < Math.round(averageRating)
                    ? "fill-current text-blue-500"
                    : "text-gray-300"
                }`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M10 15l-5.878 3.09 1.123-6.545L.49 6.91l6.564-.955L10 0l2.946 5.955 6.564.955-4.755 4.635 1.123 6.545z" />
              </svg>
            ))}
          </div>
          <p className="text-gray-500 text-sm">({totalReviews}) reviews</p>
        </div>
      </div>

      <div className="space-y-2">
        {reviewData.map((item) => (
          <div key={item.stars} className="flex items-center space-x-2">
            <span className="w-4 text-sm">{item.stars}</span>
            <div className="flex-1 bg-gray-200 rounded h-2">
              <div
                className="bg-blue-500 h-2 rounded"
                style={{ width: `${item.percent}%` }}
              />
            </div>
            <span className="w-10 text-sm text-gray-500">{item.percent}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}
