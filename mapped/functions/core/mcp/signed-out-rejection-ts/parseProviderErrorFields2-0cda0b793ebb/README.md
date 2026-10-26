# `parseProviderErrorFields2`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/integrations/README.md).

**Módulo:** `core/mcp/signed-out-rejection.ts` · [README do módulo](../../../../../modules/core/mcp/signed-out-rejection-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:585301-585316](../../../../../../reference/runtime/sand-eval-runner.cjs#L585301-L585316) | `FunctionDeclaration` | não | `text3` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:585301-585316](../../../../../../reference/runtime/sand-eval-runner.cjs#L585301-L585316) | 5 | 0 | 0 | 3 | 0 | 1 |

### evaluation:585301

Chamadas escritas diretamente neste corpo: `JSON.parse`, `isUnknownRecord2`.

Alvos de atribuição ou incremento: `parsed`.

SHA-256 do trecho: `e270b681a693a9bc51252dce36c4131c586483ce2c3c45936dfaafedea816d24`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
