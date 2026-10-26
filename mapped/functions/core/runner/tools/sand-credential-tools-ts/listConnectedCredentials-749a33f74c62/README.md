# `listConnectedCredentials`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/sand-credential-tools.ts` · [README do módulo](../../../../../../modules/core/runner/tools/sand-credential-tools-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:751981-752021](../../../../../../../reference/runtime/host-main.cjs#L751981-L752021) | `FunctionDeclaration` | sim | `access5, args` |
| [evaluation:525047-525087](../../../../../../../reference/runtime/sand-eval-runner.cjs#L525047-L525087) | `FunctionDeclaration` | sim | `access4, args` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:751981-752021](../../../../../../../reference/runtime/host-main.cjs#L751981-L752021) | 16 | 0 | 2 | 6 | 0 | 0 |
| [evaluation:525047-525087](../../../../../../../reference/runtime/sand-eval-runner.cjs#L525047-L525087) | 16 | 0 | 2 | 6 | 0 | 0 |

### host:751981

Chamadas escritas diretamente neste corpo: `.join`, `access5.connectedProviders`, `access5.list`, `oneTimeCodeGuidance`, `providers.includes`, `vaultCredentialRequestGuidance`, `views.map`, `views.some`.

SHA-256 do trecho: `fc68ecb7b072e993067edfce4d9dab1d852e78d876cf80e5cd5c55ca71ad4253`.

### evaluation:525047

Chamadas escritas diretamente neste corpo: `.join`, `access4.connectedProviders`, `access4.list`, `oneTimeCodeGuidance`, `providers.includes`, `vaultCredentialRequestGuidance`, `views.map`, `views.some`.

SHA-256 do trecho: `97ff0987a0833495f6938091c6d64eb4b5af741e9d3694b12dfea8c51f3fe5a0`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
