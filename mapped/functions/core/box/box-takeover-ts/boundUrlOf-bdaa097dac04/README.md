# `boundUrlOf`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `core/box/box-takeover.ts` · [README do módulo](../../../../../modules/core/box/box-takeover-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:775937-775947](../../../../../../reference/runtime/host-main.cjs#L775937-L775947) | `FunctionDeclaration` | não | `request5` |
| [evaluation:575594-575604](../../../../../../reference/runtime/sand-eval-runner.cjs#L575594-L575604) | `FunctionDeclaration` | não | `request3` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:775937-775947](../../../../../../reference/runtime/host-main.cjs#L775937-L775947) | 4 | 0 | 0 | 4 | 0 | 0 |
| [evaluation:575594-575604](../../../../../../reference/runtime/sand-eval-runner.cjs#L575594-L575604) | 4 | 0 | 0 | 4 | 0 | 0 |

### host:775937

Chamadas escritas diretamente neste corpo: `siteOf`, `webHostOf`.

SHA-256 do trecho: `bd5a0815ae7a23f930edc55501609f3fb2670716b736a97479effab0b19cfaad`.

### evaluation:575594

Chamadas escritas diretamente neste corpo: `siteOf`, `webHostOf`.

SHA-256 do trecho: `6022a638494eb4823d8db62488baf2eab0cfe04852a5821b17f419e6a49ec2af`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
