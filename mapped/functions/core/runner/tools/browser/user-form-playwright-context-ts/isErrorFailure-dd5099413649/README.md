# `isErrorFailure`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/browser-computer/README.md).

**Módulo:** `core/runner/tools/browser/user-form-playwright-context.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/browser/user-form-playwright-context-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:767482-767486](../../../../../../../../reference/runtime/host-main.cjs#L767482-L767486) | `FunctionDeclaration` | não | `text3` |
| [evaluation:562999-563003](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L562999-L563003) | `FunctionDeclaration` | não | `text3` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:767482-767486](../../../../../../../../reference/runtime/host-main.cjs#L767482-L767486) | 2 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:562999-563003](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L562999-L563003) | 2 | 0 | 0 | 3 | 0 | 0 |

### host:767482

Chamadas escritas diretamente neste corpo: `PLAYWRIGHT_UNKNOWN_TOOL_REFUSAL.test`, `text3.includes`.

SHA-256 do trecho: `72be033b98431e6e73848853fb0108a9bc43cf2e6d8059d035ffff4461e7ceb9`.

### evaluation:562999

Chamadas escritas diretamente neste corpo: `PLAYWRIGHT_UNKNOWN_TOOL_REFUSAL.test`, `text3.includes`.

SHA-256 do trecho: `72be033b98431e6e73848853fb0108a9bc43cf2e6d8059d035ffff4461e7ceb9`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
