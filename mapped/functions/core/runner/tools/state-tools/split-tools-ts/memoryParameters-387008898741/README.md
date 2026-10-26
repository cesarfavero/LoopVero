# `memoryParameters`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/state-tools/split-tools.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/state-tools/split-tools-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:771622-771650](../../../../../../../../reference/runtime/host-main.cjs#L771622-L771650) | `FunctionDeclaration` | não | `memoryTypes, teamBot` |
| [evaluation:570855-570883](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L570855-L570883) | `FunctionDeclaration` | não | `memoryTypes, teamBot` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:771622-771650](../../../../../../../../reference/runtime/host-main.cjs#L771622-L771650) | 2 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:570855-570883](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L570855-L570883) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:771622

Chamadas escritas diretamente neste corpo: `.describe`, `.min`, `.trim`, `base.extend`, `external_exports2.enum`, `external_exports2.object`, `external_exports2.string`, `nonEmptyTuple`, `offered.map`, `offered.some`, `offeredMemoryTypes`, `withMetaParameter.extend`.

SHA-256 do trecho: `75be84d5b87770cd6720e73f29e218c261bebed6f4eba98937341a50679bb576`.

### evaluation:570855

Chamadas escritas diretamente neste corpo: `.describe`, `.min`, `.trim`, `base.extend`, `external_exports3.enum`, `external_exports3.object`, `external_exports3.string`, `nonEmptyTuple`, `offered.map`, `offered.some`, `offeredMemoryTypes`, `withMetaParameter.extend`.

SHA-256 do trecho: `f747def2ed04ac499375d63a2cce00bf03fbf56596821539977526e0858e8a6e`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
