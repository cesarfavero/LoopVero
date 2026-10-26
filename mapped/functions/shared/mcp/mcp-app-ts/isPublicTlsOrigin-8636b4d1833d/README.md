# `isPublicTlsOrigin`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/integrations/README.md).

**Módulo:** `shared/mcp/mcp-app.ts` · [README do módulo](../../../../../modules/shared/mcp/mcp-app-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:486805-486811](../../../../../../reference/runtime/host-main.cjs#L486805-L486811) | `FunctionDeclaration` | não | `value` |
| [evaluation:495121-495127](../../../../../../reference/runtime/sand-eval-runner.cjs#L495121-L495127) | `FunctionDeclaration` | não | `value` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:486805-486811](../../../../../../reference/runtime/host-main.cjs#L486805-L486811) | 1 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:495121-495127](../../../../../../reference/runtime/sand-eval-runner.cjs#L495121-L495127) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:486805

Chamadas escritas diretamente neste corpo: `.replace`, `.toLowerCase`, `PUBLIC_TLS_ORIGIN.test`, `SPECIAL_USE_AND_REBINDING_SUFFIXES.some`, `value.replace`.

SHA-256 do trecho: `b064d642d148c1f889c05f2a9402cb2c81394448519155be1350fe70097fa48e`.

### evaluation:495121

Chamadas escritas diretamente neste corpo: `.replace`, `.toLowerCase`, `PUBLIC_TLS_ORIGIN.test`, `SPECIAL_USE_AND_REBINDING_SUFFIXES.some`, `value.replace`.

SHA-256 do trecho: `b064d642d148c1f889c05f2a9402cb2c81394448519155be1350fe70097fa48e`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
