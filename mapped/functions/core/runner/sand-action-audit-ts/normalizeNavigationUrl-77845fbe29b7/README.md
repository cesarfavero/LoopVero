# `normalizeNavigationUrl`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/sand-action-audit.ts` · [README do módulo](../../../../../modules/core/runner/sand-action-audit-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:699063-699076](../../../../../../reference/runtime/host-main.cjs#L699063-L699076) | `FunctionDeclaration` | não | `rawUrl` |
| [evaluation:512422-512435](../../../../../../reference/runtime/sand-eval-runner.cjs#L512422-L512435) | `FunctionDeclaration` | não | `rawUrl` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:699063-699076](../../../../../../reference/runtime/host-main.cjs#L699063-L699076) | 3 | 1 | 0 | 5 | 0 | 1 |
| [evaluation:512422-512435](../../../../../../reference/runtime/sand-eval-runner.cjs#L512422-L512435) | 3 | 1 | 0 | 5 | 0 | 1 |

### host:699063

Chamadas escritas diretamente neste corpo: `new URL`, `rawUrl.trim`, `trimmed.startsWith`.

SHA-256 do trecho: `4db08f9c11a203064d11eb5c5e58dffa227706f6a186429f8537d4e0a9424c63`.

### evaluation:512422

Chamadas escritas diretamente neste corpo: `new URL`, `rawUrl.trim`, `trimmed.startsWith`.

SHA-256 do trecho: `5254e69bc7ac5071a8540c0ce9d312efdcf0d3fab4a391abfae4b18445b27c7a`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
