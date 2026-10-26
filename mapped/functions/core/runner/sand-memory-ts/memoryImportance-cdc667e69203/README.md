# `memoryImportance`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/memory/README.md).

**Módulo:** `core/runner/sand-memory.ts` · [README do módulo](../../../../../modules/core/runner/sand-memory-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:702654-702658](../../../../../../reference/runtime/host-main.cjs#L702654-L702658) | `FunctionDeclaration` | não | `content` |
| [evaluation:536156-536160](../../../../../../reference/runtime/sand-eval-runner.cjs#L536156-L536160) | `FunctionDeclaration` | não | `content` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:702654-702658](../../../../../../reference/runtime/host-main.cjs#L702654-L702658) | 2 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:536156-536160](../../../../../../reference/runtime/sand-eval-runner.cjs#L536156-L536160) | 2 | 0 | 0 | 3 | 0 | 0 |

### host:702654

Chamadas escritas diretamente neste corpo: `content.startsWith`.

SHA-256 do trecho: `d819462a29e12c3e94cda6049350614a1a5254d39513d9c84dd017e4b60c6130`.

### evaluation:536156

Chamadas escritas diretamente neste corpo: `content.startsWith`.

SHA-256 do trecho: `d819462a29e12c3e94cda6049350614a1a5254d39513d9c84dd017e4b60c6130`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
