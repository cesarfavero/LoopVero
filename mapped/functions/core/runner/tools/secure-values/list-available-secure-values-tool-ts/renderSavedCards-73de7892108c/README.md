# `renderSavedCards`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/secure-values/list-available-secure-values-tool.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/secure-values/list-available-secure-values-tool-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:767270-767291](../../../../../../../../reference/runtime/host-main.cjs#L767270-L767291) | `FunctionDeclaration` | não | `cards` |
| [evaluation:562789-562810](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L562789-L562810) | `FunctionDeclaration` | não | `cards` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:767270-767291](../../../../../../../../reference/runtime/host-main.cjs#L767270-L767291) | 1 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:562789-562810](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L562789-L562810) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:767270

Chamadas escritas diretamente neste corpo: `.flatMap`, `.join`, `cards.slice`, `unlistedLine`.

SHA-256 do trecho: `2130191a2b5ab2dd083563723a9f92b301d920897257fce552abf1b14092d619`.

### evaluation:562789

Chamadas escritas diretamente neste corpo: `.flatMap`, `.join`, `cards.slice`, `unlistedLine`.

SHA-256 do trecho: `2130191a2b5ab2dd083563723a9f92b301d920897257fce552abf1b14092d619`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
