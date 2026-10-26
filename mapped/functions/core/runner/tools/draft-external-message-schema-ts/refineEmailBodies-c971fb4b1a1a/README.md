# `refineEmailBodies`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/draft-external-message-schema.ts` · [README do módulo](../../../../../../modules/core/runner/tools/draft-external-message-schema-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:755074-755084](../../../../../../../reference/runtime/host-main.cjs#L755074-L755084) | `FunctionDeclaration` | não | `value, ctx` |
| [evaluation:539699-539709](../../../../../../../reference/runtime/sand-eval-runner.cjs#L539699-L539709) | `FunctionDeclaration` | não | `value, ctx` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:755074-755084](../../../../../../../reference/runtime/host-main.cjs#L755074-L755084) | 2 | 0 | 0 | 0 | 0 | 0 |
| [evaluation:539699-539709](../../../../../../../reference/runtime/sand-eval-runner.cjs#L539699-L539709) | 2 | 0 | 0 | 0 | 0 | 0 |

### host:755074

Chamadas escritas diretamente neste corpo: `ctx.addIssue`, `emailBodyHtmlTag`, `refineHtmlBody`.

SHA-256 do trecho: `9338fffb78f14e230906bdaff61cc5b7700c8d8f38a375d31ff6dae41450f55e`.

### evaluation:539699

Chamadas escritas diretamente neste corpo: `ctx.addIssue`, `emailBodyHtmlTag`, `refineHtmlBody`.

SHA-256 do trecho: `d5ded1d0756e9e2d08274319a4cea2f04c79a80edf415a8919ba097eee6f93ea`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
