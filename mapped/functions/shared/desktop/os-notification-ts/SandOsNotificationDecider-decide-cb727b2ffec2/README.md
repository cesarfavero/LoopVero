# `SandOsNotificationDecider.decide`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `shared/desktop/os-notification.ts` · [README do módulo](../../../../../modules/shared/desktop/os-notification-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:703288-703302](../../../../../../reference/runtime/host-main.cjs#L703288-L703302) | `method` | não | `input2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:703288-703302](../../../../../../reference/runtime/host-main.cjs#L703288-L703302) | 1 | 1 | 0 | 1 | 0 | 0 |

### host:703288

Chamadas escritas diretamente neste corpo: `diffAgentNotificationTransitions`, `new Map`, `nextPrevious.set`, `this.account`, `this.accountedMessageId.has`, `this.gateTransitions`.

Alvos de atribuição ou incremento: `this.previous`.

SHA-256 do trecho: `f0391781059fe7e0e1a47a2745e5c1a7f3848a24dae0fa2ef00f400a87ce75c3`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
