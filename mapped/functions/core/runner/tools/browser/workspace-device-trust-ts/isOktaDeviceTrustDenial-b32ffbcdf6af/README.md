# `isOktaDeviceTrustDenial`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/browser-computer/README.md).

**Módulo:** `core/runner/tools/browser/workspace-device-trust.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/browser/workspace-device-trust-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:743298-743300](../../../../../../../../reference/runtime/host-main.cjs#L743298-L743300) | `FunctionDeclaration` | não | `path33, title` |
| [evaluation:516149-516151](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L516149-L516151) | `FunctionDeclaration` | não | `path33, title` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:743298-743300](../../../../../../../../reference/runtime/host-main.cjs#L743298-L743300) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:516149-516151](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L516149-L516151) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:743298

Chamadas escritas diretamente neste corpo: `DEVICE_TRUST_TITLE.test`, `path33.includes`.

SHA-256 do trecho: `4f21998d9127473530179fbcf97fe3fa2871614c10a3ef323d07961933390dfb`.

### evaluation:516149

Chamadas escritas diretamente neste corpo: `DEVICE_TRUST_TITLE.test`, `path33.includes`.

SHA-256 do trecho: `4f21998d9127473530179fbcf97fe3fa2871614c10a3ef323d07961933390dfb`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
