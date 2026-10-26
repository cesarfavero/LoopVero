# `mergeVaultContactPrefill`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/secure-values/vault-contact.ts` · [README do módulo](../../../../../../modules/core/runner/secure-values/vault-contact-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:724577-724588](../../../../../../../reference/runtime/host-main.cjs#L724577-L724588) | `FunctionDeclaration` | não | `{   saved,   changes = {} }` |
| [evaluation:550056-550067](../../../../../../../reference/runtime/sand-eval-runner.cjs#L550056-L550067) | `FunctionDeclaration` | não | `{   saved,   changes = {} }` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:724577-724588](../../../../../../../reference/runtime/host-main.cjs#L724577-L724588) | 2 | 1 | 0 | 1 | 0 | 0 |
| [evaluation:550056-550067](../../../../../../../reference/runtime/sand-eval-runner.cjs#L550056-L550067) | 2 | 1 | 0 | 1 | 0 | 0 |

### host:724577

Chamadas escritas diretamente neste corpo: `change.trim`.

Alvos de atribuição ou incremento: `merged[computed]`.

SHA-256 do trecho: `2c09a42c10f1dd713413ec28a4b6d6442a7ed536a42dd9da8a2656e898fc68f5`.

### evaluation:550056

Chamadas escritas diretamente neste corpo: `change.trim`.

Alvos de atribuição ou incremento: `merged[computed]`.

SHA-256 do trecho: `2c09a42c10f1dd713413ec28a4b6d6442a7ed536a42dd9da8a2656e898fc68f5`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
