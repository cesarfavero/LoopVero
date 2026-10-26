# `buildErrorResult`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/communicate-tool.ts` · [README do módulo](../../../../../../modules/core/runner/tools/communicate-tool-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:725072-725079](../../../../../../../reference/runtime/host-main.cjs#L725072-L725079) | `FunctionDeclaration` | não | `message` |
| [evaluation:480043-480050](../../../../../../../reference/runtime/sand-eval-runner.cjs#L480043-L480050) | `FunctionDeclaration` | não | `message` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:725072-725079](../../../../../../../reference/runtime/host-main.cjs#L725072-L725079) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:480043-480050](../../../../../../../reference/runtime/sand-eval-runner.cjs#L480043-L480050) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:725072

Chamadas escritas diretamente neste corpo: `new CommunicateUpdateError`, `new CommunicateUpdateResult`.

SHA-256 do trecho: `62a84fe5a9fd9043df60a5255ee3e7c464dc0528fd7d4506671b097678cfe3b5`.

### evaluation:480043

Chamadas escritas diretamente neste corpo: `new CommunicateUpdateError`, `new CommunicateUpdateResult`.

SHA-256 do trecho: `62a84fe5a9fd9043df60a5255ee3e7c464dc0528fd7d4506671b097678cfe3b5`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
