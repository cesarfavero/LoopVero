# `recheckDecryptedTarget`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/browser-computer/README.md).

**Módulo:** `core/runner/tools/secure-values/browser-secure-fill-tool.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/secure-values/browser-secure-fill-tool-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:767148-767168](../../../../../../../../reference/runtime/host-main.cjs#L767148-L767168) | `FunctionDeclaration` | sim | `ctx, decrypted, target, anySite` |
| [evaluation:562667-562687](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L562667-L562687) | `FunctionDeclaration` | sim | `ctx, decrypted, target, anySite` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:767148-767168](../../../../../../../../reference/runtime/host-main.cjs#L767148-L767168) | 3 | 0 | 2 | 2 | 0 | 0 |
| [evaluation:562667-562687](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L562667-L562687) | 3 | 0 | 2 | 2 | 0 | 0 |

### host:767148

Chamadas escritas diretamente neste corpo: `traced`.

SHA-256 do trecho: `e8dde7dda23d230c9a140b394dfc0a5e90a936feb24ed0f78fffe010e4686e9a`.

### evaluation:562667

Chamadas escritas diretamente neste corpo: `traced`.

SHA-256 do trecho: `e8dde7dda23d230c9a140b394dfc0a5e90a936feb24ed0f78fffe010e4686e9a`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
