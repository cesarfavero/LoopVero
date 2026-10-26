# `findUnboundedRepoListener`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/automations/README.md).

**Módulo:** `core/automations/repo-wide-listener-refusal.ts` · [README do módulo](../../../../../modules/core/automations/repo-wide-listener-refusal-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:762012-762022](../../../../../../reference/runtime/host-main.cjs#L762012-L762022) | `FunctionDeclaration` | não | `trigger2` |
| [evaluation:554590-554600](../../../../../../reference/runtime/sand-eval-runner.cjs#L554590-L554600) | `FunctionDeclaration` | não | `trigger` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:762012-762022](../../../../../../reference/runtime/host-main.cjs#L762012-L762022) | 3 | 1 | 0 | 2 | 0 | 0 |
| [evaluation:554590-554600](../../../../../../reference/runtime/sand-eval-runner.cjs#L554590-L554600) | 3 | 1 | 0 | 2 | 0 | 0 |

### host:762012

Chamadas escritas diretamente neste corpo: `events.filter`, `isBoundedListener`, `triggerListeners`.

SHA-256 do trecho: `b960b018b2a21263710b1fdbe8ecf5ea62ebd7bbded27907a3b6da8e3c21871c`.

### evaluation:554590

Chamadas escritas diretamente neste corpo: `events.filter`, `isBoundedListener`, `triggerListeners`.

SHA-256 do trecho: `64eda7a24e0b7d49b6f909b48703128f0804cca5c258e4e8124cf31e879c73ee`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
