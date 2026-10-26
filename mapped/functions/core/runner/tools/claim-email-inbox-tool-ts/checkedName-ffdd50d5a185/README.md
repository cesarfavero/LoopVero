# `checkedName`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/claim-email-inbox-tool.ts` · [README do módulo](../../../../../../modules/core/runner/tools/claim-email-inbox-tool-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:764823-764830](../../../../../../../reference/runtime/host-main.cjs#L764823-L764830) | `FunctionDeclaration` | não | `requested` |
| [evaluation:558191-558198](../../../../../../../reference/runtime/sand-eval-runner.cjs#L558191-L558198) | `FunctionDeclaration` | não | `requested` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:764823-764830](../../../../../../../reference/runtime/host-main.cjs#L764823-L764830) | 1 | 0 | 0 | 2 | 1 | 1 |
| [evaluation:558191-558198](../../../../../../../reference/runtime/sand-eval-runner.cjs#L558191-L558198) | 1 | 0 | 0 | 2 | 1 | 1 |

### host:764823

Chamadas escritas diretamente neste corpo: `parseClaimEmailUsername`.

Alvos de lançamento explícito: `error64`.

SHA-256 do trecho: `6895a01f551287167a9a9b6df36d1ed9b26db8aaa628ec11a06f325d56204100`.

### evaluation:558191

Chamadas escritas diretamente neste corpo: `parseClaimEmailUsername`.

Alvos de lançamento explícito: `error63`.

SHA-256 do trecho: `3c67e24b6c66632d8a52b3dd0ca5a175f4514dae0b185a5f8c795b701964db6d`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
