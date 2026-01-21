export default function Nav() {
  return (
    <div className="h-20 border-b px-layout border-gray-100 flex place-items-center">
      <div className="flex place-items-center">
        <img src="/imgs/logo.png" className="h-8" />
        <p className="text-xl ml-2">해중.com</p>
      </div>
      <div className="flex-1" />
      <button className="border rounded-xl px-3 py-1.5">로그인</button>
    </div>
  );
}
