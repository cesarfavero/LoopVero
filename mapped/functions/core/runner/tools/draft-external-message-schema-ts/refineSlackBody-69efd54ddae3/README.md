# `refineSlackBody`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/draft-external-message-schema.ts` · [README do módulo](../../../../../../modules/core/runner/tools/draft-external-message-schema-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:755153-755164](../../../../../../../reference/runtime/host-main.cjs#L755153-L755164) | `FunctionDeclaration` | não | `body, ctx` |
| [evaluation:539778-539789](../../../../../../../reference/runtime/sand-eval-runner.cjs#L539778-L539789) | `FunctionDeclaration` | não | `body, ctx` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:755153-755164](../../../../../../../reference/runtime/host-main.cjs#L755153-L755164) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:539778-539789](../../../../../../../reference/runtime/sand-eval-runner.cjs#L539778-L539789) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:755153

Chamadas escritas diretamente neste corpo: `.map`, `SLACK_DRAFT_SYNTAX_PROBLEMS.filter`, `ctx.addIssue`, `fixes.join`, `slackBodyProblems`.

SHA-256 do trecho: `628c2fa83d32d2a036d657673a64f2f872dff69c1fa6bfca1b3df682d850422c`.

### evaluation:539778

Chamadas escritas diretamente neste corpo: `.map`, `SLACK_DRAFT_SYNTAX_PROBLEMS.filter`, `ctx.addIssue`, `fixes.join`, `slackBodyProblems`.

SHA-256 do trecho: `7f486a437d1e4cff7ad098d8843633d9d2d2d304b8b94d73d5050a234f97203a`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
