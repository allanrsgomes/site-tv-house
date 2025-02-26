import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

export default function SubscriptionPlans() {
  return (
    <div className="py-10 text-center">
      <h2 className="text-2xl font-bold">Escolha Seu Plano</h2>
      <h3 className="text-2xl font-bold">Quanto mais telas, mais barato</h3>
      <div className="mt-6 flex justify-center gap-4">
        <Card><CardContent><h3 className="text-xl font-bold">1 Tela</h3><p>R$44,90/mês</p></CardContent></Card>
        <Card><CardContent><h3 className="text-xl font-bold">2 Telas</h3><p>R$34,90/mês cada</p></CardContent></Card>
        <Card><CardContent><h3 className="text-xl font-bold">3 Telas ou mais</h3><p>R$29,90/mês cada</p></CardContent></Card>
      </div>
    </div>
  );
}