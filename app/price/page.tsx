"use client"

import Link from "next/link"

import { showCaseConfig } from "@/config/showcase"
import { DevAlert } from "@/components/development-alert"

export default function PricePage() {
  return (
    <>
      <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
        Прайс
      </h2>
      <h3 className="mt-2 scroll-m-20 text-2xl font-semibold tracking-tight">
        {showCaseConfig[0].title}
      </h3>
      <div className="ml-6">
        <p className="text-muted-foreground">
          Модель працює шляхом отримання векторів початкової бази знаннь
          (одноразово) та вектора запиту (кожен раз). Витрати на цю модель
          складають:
        </p>
        <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
          <li>
            Отримання векторів початкових данних
            <span className="text-muted-foreground">
              (одноразово чи при оновленні бази)
            </span>
            <br />
            <span className="text-muted-foreground">Приблизно </span>
            <span className="font-semibold">$0.0004</span>
            <span className="text-muted-foreground"> за 1000 символів</span>
            <br />
            <span className="text-muted-foreground">
              Приклад - вся база Класифікаційних рішень з нинішнім об&quot;ємом
              тексту коштуватиме{" "}
            </span>
            <span className="font-semibold">~ $16.5</span>
          </li>
          <li>
            Отримання вектору запиту
            <br />
            <span className="text-muted-foreground">Приблизно </span>
            <span className="font-semibold">$0.0004</span>
            <span className="text-muted-foreground"> за 1000 символів</span>
          </li>
          <li>
            <span className="text-muted-foreground">(опціонально)</span> база
            для зберігання векторів та швидкого доступу до них
            <br />
            <span className="text-muted-foreground">
              Залежить від вибору бази. Найпопулярніша{" "}
            </span>
            <Link
              href="https://www.pinecone.io/"
              target="_blank"
              className="font-medium text-primary underline underline-offset-4"
            >
              Pinecone
            </Link>
            <span className="text-muted-foreground"> - </span>
            <span className="font-semibold">$70/місяць</span>
          </li>
        </ul>
      </div>
      <h3 className="mt-2 scroll-m-20 text-2xl font-semibold tracking-tight">
        {showCaseConfig[1].title}
      </h3>
      <div className="ml-6">
        <p className="text-muted-foreground">
          Модель працює шляхом отримання векторів початкової бази знаннь
          (одноразово чи при оновленні документації) та вектора запиту (кожен
          раз). Отримує релевантні частини документації та використовує їх як
          контекст для відповіді на поставлене питання. Витрати на цю модель
          складають:
        </p>
        <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
          <li>
            Отримання векторів початкових данних{" "}
            <span className="text-muted-foreground">(одноразово)</span>
            <br />
            <span className="text-muted-foreground">Приблизно </span>
            <span className="font-semibold">$0.0004</span>
            <span className="text-muted-foreground"> за 1000 символів</span>
            <br />
            <span className="text-muted-foreground">Приклад - на </span>
            <span className="font-semibold"></span>$1.2
            <span className="text-muted-foreground">
              {" "}
              можна векторизувати приблизно{" "}
            </span>
            <span className="font-semibold">1000</span>
            <span className="text-muted-foreground">
              {" "}
              сторінок тексту (з розрахунку{" "}
            </span>
            <span className="font-semibold">~3000</span>
            <span className="text-muted-foreground">
              {" "}
              символів на сторінку)
            </span>
          </li>
          <li>
            Отримання вектору запиту
            <br />
            <span className="text-muted-foreground">Приблизно </span>
            <span className="font-semibold">$0.0004</span>
            <span className="text-muted-foreground"> за 1000 символів</span>
          </li>
          <li>
            Генерація відповіді на основі підібраних джерел з документації
            <br />
            <span className="text-muted-foreground">Приблизно </span>
            <span className="font-semibold">$0.008 - $1 **</span>
          </li>
          <li>
            <span className="text-muted-foreground">(опціонально)</span> база
            для зберігання векторів та швидкого доступу до них
            <br />
            <span className="text-muted-foreground">
              Залежить від вибору бази. Найпопулярніша{" "}
            </span>
            <Link
              href="https://www.pinecone.io/"
              target="_blank"
              className="font-medium text-primary underline underline-offset-4"
            >
              Pinecone
            </Link>
            <span className="text-muted-foreground"> - </span>
            <span className="font-semibold">$70/місяць</span>
          </li>
        </ul>
        <small className="text-xs font-medium leading-none">
          **В залежності від вибору розмовної моделі приблизна ціна за запит
          може варіюватися
        </small>
      </div>
      <h3 className="mt-2 scroll-m-20 text-2xl font-semibold tracking-tight">
        {showCaseConfig[2].title}*
      </h3>
      <div className="ml-6">
        <p className="text-muted-foreground">
          Модель працює шляхом розділення великого тексту на частини, аналізує
          кожну, отримує короткий зміст кожної, складає в новий документ та
          отримує короткий зміст цього документа. Витрати на цю модель
          складають:
        </p>
        <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
          <li>
            Аналіз тексту розміром в 253 970 символів{" "}
            <Link
              href="https://www.mdoffice.com.ua/ua/aMDODoc.FindHelpAdv?p_file=11_19790"
              target="_blank"
              className="font-medium text-primary underline underline-offset-4"
            >
              (Приклад 1)
            </Link>{" "}
            коштує <span className="font-semibold">~ $9</span>
          </li>
        </ul>
        <small className="text-xs font-medium leading-none">
          **Через велику ціну та довгий час виконання (1 - 10хв) відповіді на
          запити в цьому блоці отримуються штучним методом
        </small>
      </div>
      <h3 className="mt-2 scroll-m-20 text-2xl font-semibold tracking-tight">
        {showCaseConfig[3].title}
      </h3>
      <div className="ml-6">
        <DevAlert />
      </div>
    </>
  )
}
