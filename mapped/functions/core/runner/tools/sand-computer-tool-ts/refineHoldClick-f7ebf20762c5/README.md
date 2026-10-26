# `refineHoldClick`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/browser-computer/README.md).

**Módulo:** `core/runner/tools/sand-computer-tool.ts` · [README do módulo](../../../../../../modules/core/runner/tools/sand-computer-tool-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:776982-777006](../../../../../../../reference/runtime/host-main.cjs#L776982-L777006) | `FunctionDeclaration` | não | `args, ctx` |
| [evaluation:576627-576651](../../../../../../../reference/runtime/sand-eval-runner.cjs#L576627-L576651) | `FunctionDeclaration` | não | `args, ctx` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:776982-777006](../../../../../../../reference/runtime/host-main.cjs#L776982-L777006) | 4 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:576627-576651](../../../../../../../reference/runtime/sand-eval-runner.cjs#L576627-L576651) | 4 | 0 | 0 | 2 | 0 | 0 |

### host:776982

Chamadas escritas diretamente neste corpo: `ctx.addIssue`.

SHA-256 do trecho: `6432418166005ab2e041bc46511455d4a69b2b1db6faf6a563c7f12890c238a3`.

### evaluation:576627

Chamadas escritas diretamente neste corpo: `ctx.addIssue`.

SHA-256 do trecho: `f613d348b4b24a2631afbc63f829e515ec81a73984d87b55ddd9d31b69e80c98`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
