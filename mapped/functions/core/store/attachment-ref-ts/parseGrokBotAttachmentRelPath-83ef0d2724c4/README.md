# `parseGrokBotAttachmentRelPath`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `core/store/attachment-ref.ts` · [README do módulo](../../../../../modules/core/store/attachment-ref-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:752277-752285](../../../../../../reference/runtime/host-main.cjs#L752277-L752285) | `FunctionDeclaration` | não | `relPath` |
| [evaluation:530355-530363](../../../../../../reference/runtime/sand-eval-runner.cjs#L530355-L530363) | `FunctionDeclaration` | não | `relPath` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:752277-752285](../../../../../../reference/runtime/host-main.cjs#L752277-L752285) | 3 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:530355-530363](../../../../../../reference/runtime/sand-eval-runner.cjs#L530355-L530363) | 3 | 0 | 0 | 3 | 0 | 0 |

### host:752277

Chamadas escritas diretamente neste corpo: `.split`, `isGrokBotAttachmentKey`, `relPath.slice`, `relPath.startsWith`.

SHA-256 do trecho: `065f81795345bf303a85bc122e186db948acd07af4c84e92c521d4553f9f4df7`.

### evaluation:530355

Chamadas escritas diretamente neste corpo: `.split`, `isGrokBotAttachmentKey`, `relPath.slice`, `relPath.startsWith`.

SHA-256 do trecho: `065f81795345bf303a85bc122e186db948acd07af4c84e92c521d4553f9f4df7`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
