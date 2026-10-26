# `isFiniteNumber3`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/prompts/README.md).

**Módulo:** `core/runner/prompt-prefix-snapshot.ts` · [README do módulo](../../../../../modules/core/runner/prompt-prefix-snapshot-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:717113-717115](../../../../../../reference/runtime/host-main.cjs#L717113-L717115) | `FunctionDeclaration` | não | `value` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:717113-717115](../../../../../../reference/runtime/host-main.cjs#L717113-L717115) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:717113

Chamadas escritas diretamente neste corpo: `Number.isFinite`.

SHA-256 do trecho: `b1821a87056dd7541a528f638bbc2abd5c71653903ac2e643735095686add4ee`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
