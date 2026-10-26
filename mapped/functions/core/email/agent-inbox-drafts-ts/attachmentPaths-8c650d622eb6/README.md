# `attachmentPaths`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `core/email/agent-inbox-drafts.ts` · [README do módulo](../../../../../modules/core/email/agent-inbox-drafts-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:734905-734923](../../../../../../reference/runtime/host-main.cjs#L734905-L734923) | `FunctionDeclaration` | não | `raw, agentDir` |
| [evaluation:539329-539347](../../../../../../reference/runtime/sand-eval-runner.cjs#L539329-L539347) | `FunctionDeclaration` | não | `raw, agentDir` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:734905-734923](../../../../../../reference/runtime/host-main.cjs#L734905-L734923) | 5 | 1 | 0 | 5 | 0 | 0 |
| [evaluation:539329-539347](../../../../../../reference/runtime/sand-eval-runner.cjs#L539329-L539347) | 5 | 1 | 0 | 5 | 0 | 0 |

### host:734905

Chamadas escritas diretamente neste corpo: `paths.includes`, `paths.push`, `resolveSandEmailAttachmentPath`.

SHA-256 do trecho: `975d2b94157ed1910cb0452a978270ca3be411ce430b0b68a0244a7c9d8324d6`.

### evaluation:539329

Chamadas escritas diretamente neste corpo: `paths.includes`, `paths.push`, `resolveSandEmailAttachmentPath`.

SHA-256 do trecho: `975d2b94157ed1910cb0452a978270ca3be411ce430b0b68a0244a7c9d8324d6`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
