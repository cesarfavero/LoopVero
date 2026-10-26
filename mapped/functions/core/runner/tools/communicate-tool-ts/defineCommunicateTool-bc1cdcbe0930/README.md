# `defineCommunicateTool`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/communicate-tool.ts` · [README do módulo](../../../../../../modules/core/runner/tools/communicate-tool-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:725101-725112](../../../../../../../reference/runtime/host-main.cjs#L725101-L725112) | `FunctionDeclaration` | não | `deps, spec` |
| [evaluation:480072-480083](../../../../../../../reference/runtime/sand-eval-runner.cjs#L480072-L480083) | `FunctionDeclaration` | não | `deps, spec` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:725101-725112](../../../../../../../reference/runtime/host-main.cjs#L725101-L725112) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:480072-480083](../../../../../../../reference/runtime/sand-eval-runner.cjs#L480072-L480083) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:725101

Chamadas escritas diretamente neste corpo: `buildCommunicateTool`, `external_exports2.preprocess`, `topLevelArgKeysOf`.

SHA-256 do trecho: `1192896d3e05cb625aa8a9b35bf1c76be8b5790af658334fa3fdde4688f0d480`.

### evaluation:480072

Chamadas escritas diretamente neste corpo: `buildCommunicateTool`, `external_exports3.preprocess`, `topLevelArgKeysOf`.

SHA-256 do trecho: `7472692790fa7f41a36bc2e7565c6de996cd9202deb8490bc4f34af0e53555e1`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
