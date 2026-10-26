# `refineDragCoordinates`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/browser-computer/README.md).

**Módulo:** `core/runner/tools/sand-computer-tool.ts` · [README do módulo](../../../../../../modules/core/runner/tools/sand-computer-tool-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:777007-777016](../../../../../../../reference/runtime/host-main.cjs#L777007-L777016) | `FunctionDeclaration` | não | `args, ctx` |
| [evaluation:576652-576661](../../../../../../../reference/runtime/sand-eval-runner.cjs#L576652-L576661) | `FunctionDeclaration` | não | `args, ctx` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:777007-777016](../../../../../../../reference/runtime/host-main.cjs#L777007-L777016) | 3 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:576652-576661](../../../../../../../reference/runtime/sand-eval-runner.cjs#L576652-L576661) | 3 | 0 | 0 | 2 | 0 | 0 |

### host:777007

Chamadas escritas diretamente neste corpo: `ctx.addIssue`.

SHA-256 do trecho: `7dba52d61a4a0174e1e5773b02f67315af154db59f3d888606b80c426d378c1b`.

### evaluation:576652

Chamadas escritas diretamente neste corpo: `ctx.addIssue`.

SHA-256 do trecho: `d85476b38de6cddb8a340d6019a0a9827be4cdb26b186017b7cc070466fa5447`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
