# `formatBytes`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/download-file-tool.ts` · [README do módulo](../../../../../../modules/core/runner/tools/download-file-tool-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:773822-773826](../../../../../../../reference/runtime/host-main.cjs#L773822-L773826) | `FunctionDeclaration` | não | `bytes` |
| [evaluation:573043-573047](../../../../../../../reference/runtime/sand-eval-runner.cjs#L573043-L573047) | `FunctionDeclaration` | não | `bytes` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:773822-773826](../../../../../../../reference/runtime/host-main.cjs#L773822-L773826) | 2 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:573043-573047](../../../../../../../reference/runtime/sand-eval-runner.cjs#L573043-L573047) | 2 | 0 | 0 | 3 | 0 | 0 |

### host:773822

Chamadas escritas diretamente neste corpo: `.toFixed`.

SHA-256 do trecho: `0d9bb19f494e6564bf540f921afb3ec6ba734e4966b79574e25d989922f61631`.

### evaluation:573043

Chamadas escritas diretamente neste corpo: `.toFixed`.

SHA-256 do trecho: `0d9bb19f494e6564bf540f921afb3ec6ba734e4966b79574e25d989922f61631`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
