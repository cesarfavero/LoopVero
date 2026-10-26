# `isIntentionalAbortReason2`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/run-abort-reason.ts` · [README do módulo](../../../../../modules/core/runner/run-abort-reason-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:761826-761828](../../../../../../reference/runtime/host-main.cjs#L761826-L761828) | `FunctionDeclaration` | não | `reason` |
| [evaluation:554092-554094](../../../../../../reference/runtime/sand-eval-runner.cjs#L554092-L554094) | `FunctionDeclaration` | não | `reason` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:761826-761828](../../../../../../reference/runtime/host-main.cjs#L761826-L761828) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:554092-554094](../../../../../../reference/runtime/sand-eval-runner.cjs#L554092-L554094) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:761826

Chamadas escritas diretamente neste corpo: nenhuma chamada identificável por nome.

SHA-256 do trecho: `433cc9b50241046a967956d446b537e08089d68959f6ff923df7a31f6bb64a81`.

### evaluation:554092

Chamadas escritas diretamente neste corpo: nenhuma chamada identificável por nome.

SHA-256 do trecho: `433cc9b50241046a967956d446b537e08089d68959f6ff923df7a31f6bb64a81`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
