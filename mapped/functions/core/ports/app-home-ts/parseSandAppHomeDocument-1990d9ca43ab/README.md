# `parseSandAppHomeDocument`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `core/ports/app-home.ts` · [README do módulo](../../../../../modules/core/ports/app-home-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:770998-771013](../../../../../../reference/runtime/host-main.cjs#L770998-L771013) | `FunctionDeclaration` | não | `value` |
| [evaluation:570104-570119](../../../../../../reference/runtime/sand-eval-runner.cjs#L570104-L570119) | `FunctionDeclaration` | não | `value` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:770998-771013](../../../../../../reference/runtime/host-main.cjs#L770998-L771013) | 3 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:570104-570119](../../../../../../reference/runtime/sand-eval-runner.cjs#L570104-L570119) | 3 | 0 | 0 | 3 | 0 | 0 |

### host:770998

Chamadas escritas diretamente neste corpo: `issue2.path.join`, `sandAppHomeDocumentByteLength`, `sandAppHomeDocumentSchema.safeParse`.

SHA-256 do trecho: `72243ebc630d14ee8dee6d231f2ad8762c23f71a6bf21b3dd9f6b2ade99f13a6`.

### evaluation:570104

Chamadas escritas diretamente neste corpo: `issue2.path.join`, `sandAppHomeDocumentByteLength`, `sandAppHomeDocumentSchema.safeParse`.

SHA-256 do trecho: `65d4fbdb3a7ae540757fe8c8e9366d39d64da5bb7fd7065eeb55ae5cf9c4bb08`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
