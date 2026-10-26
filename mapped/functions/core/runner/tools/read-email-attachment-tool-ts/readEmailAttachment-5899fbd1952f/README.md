# `readEmailAttachment`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/read-email-attachment-tool.ts` · [README do módulo](../../../../../../modules/core/runner/tools/read-email-attachment-tool-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:764963-764991](../../../../../../../reference/runtime/host-main.cjs#L764963-L764991) | `FunctionDeclaration` | sim | `deps, args` |
| [evaluation:558331-558359](../../../../../../../reference/runtime/sand-eval-runner.cjs#L558331-L558359) | `FunctionDeclaration` | sim | `deps, args` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:764963-764991](../../../../../../../reference/runtime/host-main.cjs#L764963-L764991) | 5 | 0 | 2 | 2 | 2 | 0 |
| [evaluation:558331-558359](../../../../../../../reference/runtime/sand-eval-runner.cjs#L558331-L558359) | 5 | 0 | 2 | 2 | 2 | 0 |

### host:764963

Chamadas escritas diretamente neste corpo: `deps.email.readAttachment`, `deps.getPersistMediaBytes`, `describe3`, `new SandToolInputError`, `persist`, `renderEmailAttachmentSaved`, `renderEmailAttachmentText`, `storedAttachmentName`, `url2.startsWith`.

Alvos de lançamento explícito: `SandToolInputError`.

SHA-256 do trecho: `cab3d35042d0909f98a370a45ef1d02c090f7ca5e8e1a16c08206839aaca8641`.

### evaluation:558331

Chamadas escritas diretamente neste corpo: `deps.email.readAttachment`, `deps.getPersistMediaBytes`, `describe3`, `new SandToolInputError`, `persist`, `renderEmailAttachmentSaved`, `renderEmailAttachmentText`, `storedAttachmentName`, `url2.startsWith`.

Alvos de lançamento explícito: `SandToolInputError`.

SHA-256 do trecho: `b0ce9ce24270d95eff89cd3e88a634f5c778ffc967f238e35a6e4c33870b8a1c`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
