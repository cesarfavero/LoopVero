# `isUserSkillsFingerprintPath`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/skills/README.md).

**Módulo:** `core/brain-docs/user-skills-fingerprint.ts` · [README do módulo](../../../../../modules/core/brain-docs/user-skills-fingerprint-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:784797-784801](../../../../../../reference/runtime/host-main.cjs#L784797-L784801) | `FunctionDeclaration` | não | `posixPathUnderLibraryRoot` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:784797-784801](../../../../../../reference/runtime/host-main.cjs#L784797-L784801) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:784797

Chamadas escritas diretamente neste corpo: `isSafeFolderId`, `posixPathUnderLibraryRoot.split`, `rest.every`.

SHA-256 do trecho: `2b99bb71ca3e4f07e7c36c323e810f2fac060a7bf314b549546d5af152d37097`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
