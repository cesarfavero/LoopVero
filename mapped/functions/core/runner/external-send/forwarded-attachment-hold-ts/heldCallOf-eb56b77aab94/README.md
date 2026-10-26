# `heldCallOf`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/approvals/README.md).

**Módulo:** `core/runner/external-send/forwarded-attachment-hold.ts` · [README do módulo](../../../../../../modules/core/runner/external-send/forwarded-attachment-hold-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:583658-583669](../../../../../../../reference/runtime/sand-eval-runner.cjs#L583658-L583669) | `FunctionDeclaration` | não | `args` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:583658-583669](../../../../../../../reference/runtime/sand-eval-runner.cjs#L583658-L583669) | 4 | 0 | 0 | 1 | 0 | 0 |

### evaluation:583658

Chamadas escritas diretamente neste corpo: `args.args.arguments.toJson`, `args.args.attachments.toJson`, `args.name.lastIndexOf`, `args.name.slice`.

SHA-256 do trecho: `894c2ebce9635d274b6f57d9d7d82da2a4647b8dc810289c9524eb96064df23a`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
