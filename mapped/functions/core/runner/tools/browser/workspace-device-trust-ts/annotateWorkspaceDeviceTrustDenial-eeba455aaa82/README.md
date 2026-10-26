# `annotateWorkspaceDeviceTrustDenial`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/browser-computer/README.md).

**Módulo:** `core/runner/tools/browser/workspace-device-trust.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/browser/workspace-device-trust-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:743329-743337](../../../../../../../../reference/runtime/host-main.cjs#L743329-L743337) | `FunctionDeclaration` | não | `text3` |
| [evaluation:516180-516188](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L516180-L516188) | `FunctionDeclaration` | não | `text3` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:743329-743337](../../../../../../../../reference/runtime/host-main.cjs#L743329-L743337) | 2 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:516180-516188](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L516180-L516188) | 2 | 0 | 0 | 3 | 0 | 0 |

### host:743329

Chamadas escritas diretamente neste corpo: `.find`, `.map`, `pagesIn`, `text3.includes`, `workspaceDeviceTrustDenialMessage`.

SHA-256 do trecho: `b84b372c6234d40faa935eca8856d9234bf468edbd0eaa5e860eb07f1fb83f83`.

### evaluation:516180

Chamadas escritas diretamente neste corpo: `.find`, `.map`, `pagesIn`, `text3.includes`, `workspaceDeviceTrustDenialMessage`.

SHA-256 do trecho: `b84b372c6234d40faa935eca8856d9234bf468edbd0eaa5e860eb07f1fb83f83`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
