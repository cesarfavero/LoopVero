# `createLeasedCredentialFill/runWithFill`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/credential-provider/credential-fill-lease.ts` · [README do módulo](../../../../../../modules/host/extensions/credential-provider/credential-fill-lease-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:548732-548745](../../../../../../../reference/runtime/host-main.cjs#L548732-L548745) | `ArrowFunctionExpression` | sim | `windowIndex, activeFill, fill` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:548732-548745](../../../../../../../reference/runtime/host-main.cjs#L548732-L548745) | 0 | 0 | 1 | 1 | 1 | 1 |

### host:548732

Chamadas escritas diretamente neste corpo: `fill`, `holdUntilCleared`, `releaseIfCleared`.

Alvos de atribuição ou incremento: `activeFill.active`, `result`.

Alvos de lançamento explícito: `error64`.

SHA-256 do trecho: `908dd7219bd1599b582c908a301d8e1d1c0b48a7b1720fd1ec246e071b8907c2`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
