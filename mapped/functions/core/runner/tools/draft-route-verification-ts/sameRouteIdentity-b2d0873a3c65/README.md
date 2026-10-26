# `sameRouteIdentity`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/draft-route-verification.ts` · [README do módulo](../../../../../../modules/core/runner/tools/draft-route-verification-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:735203-735211](../../../../../../../reference/runtime/host-main.cjs#L735203-L735211) | `FunctionDeclaration` | não | `a, b2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:735203-735211](../../../../../../../reference/runtime/host-main.cjs#L735203-L735211) | 2 | 0 | 0 | 3 | 0 | 0 |

### host:735203

Chamadas escritas diretamente neste corpo: `a.sendingAddress.toLowerCase`, `b2.sendingAddress.toLowerCase`.

SHA-256 do trecho: `5565090f2ab718dca74bc358f3e81e054df8167ec190ba4fed3cad588df7d6f4`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
