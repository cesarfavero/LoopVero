# `buildDraftSendCall`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/draft-connector-results.ts` · [README do módulo](../../../../../../modules/core/runner/tools/draft-connector-results-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:732958-732976](../../../../../../../reference/runtime/host-main.cjs#L732958-L732976) | `FunctionDeclaration` | não | `route, payload, verified` |
| [evaluation:540480-540498](../../../../../../../reference/runtime/sand-eval-runner.cjs#L540480-L540498) | `FunctionDeclaration` | não | `route, payload, verified` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:732958-732976](../../../../../../../reference/runtime/host-main.cjs#L732958-L732976) | 4 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:540480-540498](../../../../../../../reference/runtime/sand-eval-runner.cjs#L540480-L540498) | 4 | 0 | 0 | 3 | 0 | 0 |

### host:732958

Chamadas escritas diretamente neste corpo: `buildEmailSendCall`, `inertDraftText`.

SHA-256 do trecho: `95f0433d6c669500d138e6a93eb428eaacf352f508cac8bc025f52581f78dc8e`.

### evaluation:540480

Chamadas escritas diretamente neste corpo: `buildEmailSendCall`, `inertDraftText`.

SHA-256 do trecho: `95f0433d6c669500d138e6a93eb428eaacf352f508cac8bc025f52581f78dc8e`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
