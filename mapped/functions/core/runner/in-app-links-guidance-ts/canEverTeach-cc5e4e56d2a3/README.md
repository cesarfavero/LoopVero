# `canEverTeach`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/in-app-links-guidance.ts` · [README do módulo](../../../../../modules/core/runner/in-app-links-guidance-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:557694-557696](../../../../../../reference/runtime/host-main.cjs#L557694-L557696) | `FunctionDeclaration` | não | `row` |
| [evaluation:546130-546132](../../../../../../reference/runtime/sand-eval-runner.cjs#L546130-L546132) | `FunctionDeclaration` | não | `row` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:557694-557696](../../../../../../reference/runtime/host-main.cjs#L557694-L557696) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:546130-546132](../../../../../../reference/runtime/sand-eval-runner.cjs#L546130-L546132) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:557694

Chamadas escritas diretamente neste corpo: `NEVER_TAUGHT_ANCHORS.has`.

SHA-256 do trecho: `b5db58e4ec3d824ba0301c97827cf3de769246949a708e028640c1370e4295aa`.

### evaluation:546130

Chamadas escritas diretamente neste corpo: `NEVER_TAUGHT_ANCHORS.has`.

SHA-256 do trecho: `b5db58e4ec3d824ba0301c97827cf3de769246949a708e028640c1370e4295aa`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
