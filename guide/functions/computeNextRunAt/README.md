# `computeNextRunAt`

## Papel

Calcula o próximo instante elegível de uma agenda. É uma função de cálculo; não agenda timers, não executa uma rotina e não envia mensagens. [Implementação](../../../reference/runtime/host-main.cjs#L682580-L682596).

## Entradas e retorno

| Argumento | Significado |
| --- | --- |
| `schedule` | Texto de intervalo `@every` ou cron |
| `afterMs` | Instante base em milissegundos desde epoch |
| `timeZone` | Timezone de fallback para cron |
| Retorno | Timestamp do próximo instante, ou `null` se não encontrar/validar |

## Cálculo de intervalo

Primeiro normaliza espaços. Se `parseEverySchedule` reconhece a agenda, obtém intervalo `I` e fase opcional `P`.

Sem fase:

`next = afterMs + I`

Com fase:

`next = (floor((afterMs - P) / I) + 1) * I + P`

A soma de um no quociente garante um instante estritamente posterior, mesmo quando `afterMs` já coincide com um ponto da sequência. A fase precisa ser menor que o intervalo. [Parser](../../../reference/runtime/host-main.cjs#L682453-L682487).

Exemplo derivado da fórmula, sem executar o bundle: para `@every 20m`, base 10:07 produz 10:27. Para `@every 20m/5m`, uma base alinhada a 10:07 UTC produz 10:25 UTC. O primeiro é relativo à base; o segundo é alinhado ao epoch com fase. Esta diferença não deve desaparecer numa reconstrução.

## Cálculo de cron

Se não é intervalo, compila cron com aliases e prefixo de timezone. O formato comum tem cinco campos. A busca começa no minuto seguinte, avalia minuto, hora, mês e regra dos dias; pode saltar para a próxima mudança de dia. Procura até o limite de 366 dias e retorna `null` se não achar correspondência. [Matcher e regra de dias](../../../reference/runtime/host-main.cjs#L682333-L682376), [busca](../../../reference/runtime/host-main.cjs#L682429-L682452).

Quando dia do mês e dia da semana são restritos, usa OR. `TZ=` ou `CRON_TZ=` válido na expressão vence `timeZone`; sem timezone útil, usa o relógio local da box. `Intl.DateTimeFormat` faz a conversão de timezone e os formatters são cacheados. [Timezone](../../../reference/runtime/host-main.cjs#L682388-L682427), [prioridade](../../../reference/runtime/host-main.cjs#L682591-L682596).

## Validação distinta do cálculo

O mínimo de cinco minutos é aplicado por validação/migração da definição. `computeNextRunAt` por si só não rejeita um intervalo menor que esse mínimo. `isValidSchedule` recebe `minimumIntervalMs`; `FileAutomationStore.readConfig` migra agendas antigas. [Validação](../../../reference/runtime/host-main.cjs#L682524-L682533), [store](../../../reference/runtime/host-main.cjs#L720536-L720554).

A função não assegura que o serviço remoto vai disparar exatamente nesse instante. Janelas flexíveis, indisponibilidade e filas pertencem a outras camadas.

[Automações](../../components/automations/README.md).
