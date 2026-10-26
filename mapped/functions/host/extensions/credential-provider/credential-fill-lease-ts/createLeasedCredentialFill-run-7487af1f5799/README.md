# `createLeasedCredentialFill/run`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/credential-provider/credential-fill-lease.ts` · [README do módulo](../../../../../../modules/host/extensions/credential-provider/credential-fill-lease-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:548746-548752](../../../../../../../reference/runtime/host-main.cjs#L548746-L548752) | `ArrowFunctionExpression` | sim | `windowIndex, fill` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:548746-548752](../../../../../../../reference/runtime/host-main.cjs#L548746-L548752) | 1 | 0 | 2 | 2 | 0 | 0 |

### host:548746

Chamadas escritas diretamente neste corpo: `fills.set`, `options2.lease.acquireAutofill`, `runWithFill`.

SHA-256 do trecho: `b3d781a04db91dac93fd47738f7ad5a0bd3cf4d2b1148dd80b5ae690d526f604`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
