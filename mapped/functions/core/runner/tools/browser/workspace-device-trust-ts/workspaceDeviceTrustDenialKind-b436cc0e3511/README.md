# `workspaceDeviceTrustDenialKind`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/browser-computer/README.md).

**Módulo:** `core/runner/tools/browser/workspace-device-trust.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/browser/workspace-device-trust-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:743301-743315](../../../../../../../../reference/runtime/host-main.cjs#L743301-L743315) | `FunctionDeclaration` | não | `page` |
| [evaluation:516152-516166](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L516152-L516166) | `FunctionDeclaration` | não | `page` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:743301-743315](../../../../../../../../reference/runtime/host-main.cjs#L743301-L743315) | 5 | 0 | 0 | 4 | 0 | 0 |
| [evaluation:516152-516166](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L516152-L516166) | 5 | 0 | 0 | 4 | 0 | 0 |

### host:743301

Chamadas escritas diretamente neste corpo: `URL.canParse`, `host.endsWith`, `hostOf`, `isOktaDeviceTrustDenial`, `new URL`, `normalize5`, `path33.includes`, `title.startsWith`, `url2.pathname.toLowerCase`.

SHA-256 do trecho: `f69d5d1e36a589dc39b3e91e72e742960f448be50136adc0cf2a5071605bdb6c`.

### evaluation:516152

Chamadas escritas diretamente neste corpo: `URL.canParse`, `host.endsWith`, `hostOf`, `isOktaDeviceTrustDenial`, `new URL`, `normalize4`, `path33.includes`, `title.startsWith`, `url2.pathname.toLowerCase`.

SHA-256 do trecho: `36fa4c94ddc464d65887457cdbfd1ebd961c9b36dec1f1cfa211246aa2335351`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
