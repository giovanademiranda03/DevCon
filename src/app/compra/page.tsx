"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";
import Image from 'next/image'
import { BreadcrumbDemo } from "@/components/ui/breadcrumb";
import { Minus, Plus, SealCheck } from "@phosphor-icons/react";
import { MultiStepLoader } from "@/components/ui/mult-step-loader";
import Link from "next/link";

const formSchema = z.object({
  fullName: z.string().min(1, { message: "Nome completo é obrigatório" }),
  email: z.string().min(1, { message: "E-mail é obrigatório" }).email({ message: "E-mail inválido" }),
  quantity: z.number().min(1, { message: "Compre pelo menos 1 ingresso" }),
});

export default function PurchasePage() {
  const [successMessage, setSuccessMessage] = useState("");
  const [loading, setLoading] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      quantity: 1,
    },
  });

  const { setValue, watch } = form;
  const quantity = watch("quantity");

  const increaseQuantity = () => {
    setValue("quantity", quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setValue("quantity", quantity - 1);
    }
  };

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setLoading(true);
  
    setTimeout(() => {
      setSuccessMessage(
        `Compra realizada com sucesso! ${values.fullName}, você comprou ${values.quantity} ingresso(s).`
      );
      form.reset();
      setLoading(false);
    }, 2500); 
  };
  

  return (
  <div className="flex justify-center items-center w-full min-h-screen">
    <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen max-w-7xl">
      <div className="flex flex-col w-full p-10 gap-5">
        <BreadcrumbDemo />
        <Image alt="DevCon 2025" src="https://images.unsplash.com/photo-1582192903020-8a5e59dcdcf2" width={500} height={500} className="w-full object-cover rounded-2xl"/>
        <h2 className="text-start text-2xl font-bold text-balance text-white md:text-3xl lg:text-4xl w-full">DevCon Festival 2025</h2>
        <p className="text-base text-neutral-200">
      O maior evento de Desenvolvedores Front-End do ano. Conecte-se com os melhores devs, descubra novas ferramentas e leve sua UI ao próximo nível.
      </p>
      </div>

      <Card className="w-full bg-neutral-900/50 rounded-2xl">
        <CardContent className="w-full p-12 flex flex-col">
        {successMessage ? (
            <div className="flex flex-col gap-7 w-full max-h-screen items-center justify-center "> 
            <SealCheck weight="fill" size={72} className="text-green-500" />
              <p className="text-green-500 font-semibold text-xl text-center">{successMessage}</p>
                <Link href="/evento">
                  <Button variant={"default"}>
                    Ir para evento
                  </Button>
                </Link>
            </div>
          ) : (
            <>
          <h1 className="text-xl md:text-2xl font-bold mb-2 text-white">Comprar Ingressos</h1>
          <p className="text-neutral-300 text-sm md:text-base mb-6">Conclua sua compra fornecendo seus detalhes de pagamento.</p>
        
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                  control={form.control}
                  name="fullName"
                  render={({ field, fieldState }) => (
                    <FormItem>
                      <FormLabel className="text-white">Nome completo</FormLabel>
                      <FormControl>
                      <Input
                        placeholder="Digite seu nome completo"
                        {...field}
                        className={fieldState.error ? "border-red-500 focus-visible:ring-red-500" : ""}
                      />
                      </FormControl>
                      <FormMessage className="text-red-500" />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field, fieldState }) => (
                    <FormItem>
                      <FormLabel className="text-white">E-mail</FormLabel>
                      <FormControl>
                      <Input
                        placeholder="Digite seu e-mail"
                        {...field}
                        className={fieldState.error ? "border-red-500 focus-visible:ring-red-500" : ""}
                      />
                      </FormControl>
                      <FormMessage className="text-red-500" />
                    </FormItem>
                  )}
                />

                <FormItem>
                  <FormLabel>Quantidade de ingressos</FormLabel>
                  <div className="flex items-center gap-4 p-2 justify-center border border-neutral-800 rounded-lg">
                    <Button type="button" onClick={decreaseQuantity} variant="secondary" size="icon" className="w-full">
                    <Minus size={16} weight="bold"/>
                    </Button>
                    <div className="w-32 text-lg font-medium text-center text-white">{quantity}</div>
                    <Button type="button" onClick={increaseQuantity} variant="secondary" size="icon" className="w-full">
                   <Plus size={16} weight="bold" />
                    </Button>
                  </div>
                </FormItem>

                {loading ? (
                 <MultiStepLoader
                 loading={loading}
                 loadingStates={[
                   { text: "Verificando dados" },
                   { text: "Processando pagamento" },
                   { text: "Confirmando compra" },
                 ]}
                 duration={1000} 
               />
                ) : (
                  <Button type="submit" className="w-full mt-6">
                    {loading ? 'Processando...' : 'Finalizar compra'}
                  </Button>
                )}

              </form>
            </Form>
          </>
          )}
        </CardContent>
      </Card>
    </div>
  </div>
  );
}
