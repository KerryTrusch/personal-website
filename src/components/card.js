
export default function Card({title, body, imagesrc, tags}) {
  return (
    <div class="max-w-sm rounded overflow-hidden shadow-lg">
      <img
        class="w-full h-52"
        src={`${imagesrc}`}
        alt="Portfolio"
      />
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">{title}</div>
        <p class="text-gray-700 text-base">
          {body}
        </p>
      </div>
      <div class="px-6 pt-4 pb-2">
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          {tags.tagOne}
        </span>
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          {tags.tagTwo}
        </span>
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          {tags.tagThree}
        </span>
      </div>
    </div>
  );
}
