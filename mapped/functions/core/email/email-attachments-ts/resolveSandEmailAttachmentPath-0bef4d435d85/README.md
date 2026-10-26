# `resolveSandEmailAttachmentPath`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `core/email/email-attachments.ts` · [README do módulo](../../../../../modules/core/email/email-attachments-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:734851-734879](../../../../../../reference/runtime/host-main.cjs#L734851-L734879) | `FunctionDeclaration` | não | `{   raw,   agentDir }` |
| [evaluation:539276-539304](../../../../../../reference/runtime/sand-eval-runner.cjs#L539276-L539304) | `FunctionDeclaration` | não | `{   raw,   agentDir }` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:734851-734879](../../../../../../reference/runtime/host-main.cjs#L734851-L734879) | 6 | 0 | 0 | 6 | 0 | 0 |
| [evaluation:539276-539304](../../../../../../reference/runtime/sand-eval-runner.cjs#L539276-L539304) | 6 | 0 | 0 | 6 | 0 | 0 |

### host:734851

Chamadas escritas diretamente neste corpo: `EMAIL_ATTACHMENT_BUCKETS.has`, `import_node_path161.posix.isAbsolute`, `import_node_path161.posix.join`, `import_node_path161.posix.normalize`, `import_node_path161.posix.relative`, `raw.endsWith`, `raw.includes`, `raw.trim`, `relative21.split`, `relative21.startsWith`, `toBoxDataRootPath`, `unsafeSegments`.

SHA-256 do trecho: `0d52c35c12d060eec8968e9803976472744db0a0ab01a11cfbf28f0fc87023b3`.

### evaluation:539276

Chamadas escritas diretamente neste corpo: `EMAIL_ATTACHMENT_BUCKETS.has`, `import_node_path31.posix.isAbsolute`, `import_node_path31.posix.join`, `import_node_path31.posix.normalize`, `import_node_path31.posix.relative`, `raw.endsWith`, `raw.includes`, `raw.trim`, `relative13.split`, `relative13.startsWith`, `toBoxDataRootPath`, `unsafeSegments`.

SHA-256 do trecho: `2240e6a7be3ff2052b94619aa6e87b6f0fc1d0939b85fea02fb2e97af5b90774`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
